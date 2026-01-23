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
} from "three";
import { onMounted, onUnmounted, ref } from "vue";

/**
 * Thanks to {@link https://codepen.io/prisoner849/pen/RwyzrVj}
 */
const canvas = ref<HTMLDivElement>();

const innerWidth = window.innerWidth;
const innerHeight = window.innerHeight;

const scene = new Scene();
const camera = new PerspectiveCamera(60, innerWidth / innerHeight, 1, 1000);
camera.position.set(-14, 6, 22);
const renderer = new WebGLRenderer({ alpha: true });
renderer.setClearColor(0x00_00_00, 0);
renderer.setSize(innerWidth, innerHeight);

const gu = {
	time: { value: 0 },
};

const sizes: number[] = [];
const shift: number[] = [];
const pushShift = () => {
	shift.push(
		Math.random() * Math.PI,
		Math.random() * Math.PI * 2,
		(Math.random() * 0.9 + 0.1) * Math.PI * 0.1,
		Math.random() * 0.9 + 0.1,
	);
};
const pts = Array.from({ length: 20_000 })
	.fill(0)
	.map(() => {
		sizes.push(Math.random() * 1.5 + 0.5);
		pushShift();
		return new Vector3()
			.randomDirection()
			.multiplyScalar(Math.random() * 0.5 + 9.5);
	});

for (let index = 0; index < 40_000; index++) {
	const r = 10;
	const R = 40;
	const rand = Math.random() ** 1.5;
	const radius = Math.sqrt(R * R * rand + (1 - rand) * r * r);
	pts.push(
		new Vector3().setFromCylindricalCoords(
			radius,
			Math.random() * 2 * Math.PI,
			(Math.random() - 0.5) * 2,
		),
	);
	sizes.push(Math.random() * 1.5 + 0.5);
	pushShift();
}

const g = new BufferGeometry().setFromPoints(pts);
g.setAttribute("sizes", new Float32BufferAttribute(sizes, 1));
g.setAttribute("shift", new Float32BufferAttribute(shift, 4));

const m = new PointsMaterial({
	size: 0.125,
	transparent: true,
	depthTest: false,
	blending: AdditiveBlending,
});
m.onBeforeCompile = (shader) => {
	shader.uniforms.time = gu.time;

	shader.vertexShader = shader.vertexShader
		.replace(
			"void main() {",
			`uniform float time;
attribute float sizes;
attribute vec4 shift;
varying vec3 vColor;
void main() {`,
		)
		.replace("gl_PointSize = size;", "gl_PointSize = size * sizes;")
		.replace(
			"#include <color_vertex>",
			`#include <color_vertex>
	float d = length(abs(position) / vec3(40., 10., 10.));
	d = clamp(d, 0., 105.);
	vColor = mix(vec3(255., 42., 167.), vec3(247., 33., 159.), d) / 255.;`,
		)
		.replace(
			"#include <begin_vertex>",
			`#include <begin_vertex>
	float t = time;
	float moveT = mod(shift.x + shift.z * t, PI2);
	float moveS = mod(shift.y + shift.z * t, PI2);
	transformed += vec3(cos(moveS) * sin(moveT), cos(moveT), sin(moveS) * sin(moveT)) * shift.w;`,
		);

	shader.fragmentShader = shader.fragmentShader
		.replace(
			"void main() {",
			`varying vec3 vColor;
void main() {`,
		)
		.replace(
			"vec4 diffuseColor = vec4( diffuse, opacity );",
			`float d = length(gl_PointCoord.xy - 0.5);
	vec4 diffuseColor = vec4( vColor, smoothstep(0.5, 0.1, d) );`,
		);
};

const p = new Points(g, m);
p.rotation.order = "ZYX";
p.rotation.z = 0.2;
scene.add(p);

const clock = new Clock();

// Mouse/touch tracking for parallax effect
const mouse = { x: 0, y: 0 };
const targetRotation = { x: 0, y: 0 };
const baseRotation = { x: 0, z: 0.2 };
const parallaxStrength = 0.3;
const smoothing = 0.05;

function onPointerMove(event: MouseEvent | TouchEvent) {
	const clientX = "touches" in event ? event.touches[0].clientX : event.clientX;
	const clientY = "touches" in event ? event.touches[0].clientY : event.clientY;

	// Normalize to -1 to 1
	mouse.x = (clientX / window.innerWidth) * 2 - 1;
	mouse.y = (clientY / window.innerHeight) * 2 - 1;

	// Set target rotation based on mouse position
	targetRotation.x = mouse.y * parallaxStrength;
	targetRotation.y = mouse.x * parallaxStrength;
}

function windowResized() {
	if (renderer) {
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();

		renderer.setSize(window.innerWidth, window.innerHeight);
	}
}

onMounted(() => {
	if (!canvas.value) {
		return;
	}

	canvas.value.append(renderer.domElement);

	renderer.setAnimationLoop(() => {
		const t = clock.getElapsedTime() * 0.5;
		gu.time.value = t * Math.PI;

		// Smooth interpolation towards target rotation
		p.rotation.x +=
			(targetRotation.x + baseRotation.x - p.rotation.x) * smoothing;
		p.rotation.y += (targetRotation.y + t * 0.05 - p.rotation.y) * smoothing;
		p.rotation.z += (baseRotation.z - p.rotation.z) * smoothing;

		renderer.render(scene, camera);
	});

	window.addEventListener("resize", windowResized);
	window.addEventListener("mousemove", onPointerMove);
	window.addEventListener("touchmove", onPointerMove);

	windowResized();
});

onUnmounted(() => {
	window.removeEventListener("resize", windowResized);
	window.removeEventListener("mousemove", onPointerMove);
	window.removeEventListener("touchmove", onPointerMove);
});
</script>

<template>
	<div ref="canvas" />
</template>
