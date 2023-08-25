<script lang="ts" setup>
import {
  AdditiveBlending,
  BufferGeometry,
  Clock,
  Float32BufferAttribute,
  PerspectiveCamera,
  Points,
  PointsMaterial,
  Scene,
  Vector3,
  WebGLRenderer,
} from 'three'
import { onMounted, ref } from 'vue'

/**
 * Thanks to {@link https://codepen.io/prisoner849/pen/RwyzrVj}
 */
const canvas = ref<HTMLDivElement>()

const innerWidth = window.innerWidth
const innerHeight = window.innerHeight

const scene = new Scene()
const camera = new PerspectiveCamera(60, innerWidth / innerHeight, 1, 1000)
camera.position.set(-14, 6, 22)
const renderer = new WebGLRenderer({ alpha: true })
renderer.setClearColor(0x00_00_00, 0)
renderer.setSize(innerWidth, innerHeight)

let gu = {
  time: { value: 0 },
}

const sizes: number[] = []
const shift: number[] = []
const pushShift = () => {
  shift.push(
    Math.random() * Math.PI,
    Math.random() * Math.PI * 2,
    (Math.random() * 0.9 + 0.1) * Math.PI * 0.1,
    Math.random() * 0.9 + 0.1,
  )
}
const pts = Array.from({ length: 20_000 })
  .fill(0)
  .map(() => {
    sizes.push(Math.random() * 1.5 + 0.5)
    pushShift()
    return new Vector3().randomDirection().multiplyScalar(Math.random() * 0.5 + 9.5)
  })

for (let index = 0; index < 40_000; index++) {
  let r = 10,
    R = 40
  let rand = Math.pow(Math.random(), 1.5)
  let radius = Math.sqrt(R * R * rand + (1 - rand) * r * r)
  pts.push(
    new Vector3().setFromCylindricalCoords(
      radius,
      Math.random() * 2 * Math.PI,
      (Math.random() - 0.5) * 2,
    ),
  )
  sizes.push(Math.random() * 1.5 + 0.5)
  pushShift()
}

let g = new BufferGeometry().setFromPoints(pts)
g.setAttribute('sizes', new Float32BufferAttribute(sizes, 1))
g.setAttribute('shift', new Float32BufferAttribute(shift, 4))

let m = new PointsMaterial({
  size: 0.125,
  transparent: true,
  depthTest: false,
  blending: AdditiveBlending,
})
m.onBeforeCompile = (shader) => {
  shader.uniforms.time = gu.time

  shader.vertexShader =
    `uniform float time;attribute float sizes;attribute vec4 shift;varying vec3 vColor;${shader.vertexShader}`
      .replace(`gl_PointSize = size;`, `gl_PointSize = size * sizes;`)
      .replace(
        `#include <color_vertex>`,
        `#include <color_vertex> \n float d = length(abs(position) / vec3(1.,0.165,0.655));d = clamp(d, 0., 1.);vColor = mix(vec3(1.,0.165,0.655), vec3(1.,0.165,0.655), d) / 255.;`,
      )
      .replace(
        `#include <begin_vertex>`,
        `#include <begin_vertex> \n float t = time;float moveT = mod(shift.x + shift.z * t, PI2);float moveS = mod(shift.y + shift.z * t, PI2);transformed += vec3(cos(moveS) * sin(moveT), cos(moveT), sin(moveS) * sin(moveT)) * shift.w;`,
      )

  shader.fragmentShader = `varying vec3 vColor;${shader.fragmentShader}`
    .replace(
      `#include <clipping_planes_fragment>`,
      `#include <clipping_planes_fragment> \n float d = length(gl_PointCoord.xy - 0.5);`,
    )
    .replace(
      `vec4 diffuseColor = vec4( diffuse, opacity );`,
      `vec4 diffuseColor = vec4( vColor, smoothstep(0.5, 0.1, d) );`,
    )
}

let p = new Points(g, m)
p.rotation.order = 'ZYX'
p.rotation.z = 0.2
scene.add(p)

let clock = new Clock()

onMounted(() => {
  if (!canvas.value) {
    return
  }

  canvas.value.append(renderer.domElement)

  renderer.setAnimationLoop(() => {
    let t = clock.getElapsedTime() * 0.5
    gu.time.value = t * Math.PI
    p.rotation.y = t * 0.05
    renderer.render(scene, camera)
  })
})
</script>

<template>
  <div ref="canvas" />
</template>
