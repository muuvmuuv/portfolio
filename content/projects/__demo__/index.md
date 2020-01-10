---
title: Demo page
subtitle: I'm testing my page here. So this is nothing to count on.
image: img-01.jpg
thumb: img-02.jpg
published: true

started: 2019-09-23
ended: 2019-10-02

status: wip
website: https://marvin.digital/
team:
  - name: Marvin Heilemann
    link: https://github.com/muuvmuuv/portfolio

tags: [website, re-design]
categories: [website]
---

## Headings

# This is a **h1** title

## This is a **h2** title

### This is a **h3** title

#### This is a **h4** title

##### This is a **h5** title

###### This is a **h6** title

## Text block

<div class="container container--small hello">
 <p>this is already HTML</p>
</div>

Sleep in the bathroom sink allways wantings ⛱ food. Rub whiskers on :+1: bare
skin act innocent intently sniff hand intrigued by the shower, but hide from
vacuum cleaner yet i see a bird i stare at it i meow at it i do a <b>wiggle come
here, eat a plant, kill</b> a hands prance along on **_top of the garden
fence_**, annoy the neighbor's dog and make it bark. Throw down 😍 all the stuff
in the kitchen white cat sleep on a https://marvin.digital black shirt the cat
<u>was chasing the mouse meowing</u> chowing and wowing. I’m so hungry i’m so
hungry but ew not for that try to hold own back foot <s>to clean it but foot
reflexively</s> kicks you in face, go into a rage and bite own foot, hard decide
to want nothing to do with my owner

---

today. Snuggles up to shoulders or knees and purrs you
`to sleep find empty spot in cupboard` and sleep all day i love cuddles and cats
are cute hate dog. **Wack the mini furry mouse flex** claws on the human's belly
and purr like a lawnmower[^1] yet sniff sniff and open the door, let me out,
This site was built using [GitHub Pages](https://pages.github.com/). let me out,
_let me-out, let me-aow, let meaow,_ meaow!. Pet me pet me don't pet me my
furball really tie the ~~room together but find empty spot~~ in cupboard and
sleep all day. Milk the cow licks your face or tum, tickle bum, jellybean
footies[^or something?] cudasrly toes. Curl into a furry donut.

## Lists

- this
- is
- a
- complete
  - not
  - much
    - or
  - so
- list

_Some normal text because the parser has problems here._

1. lists
2. can
3. also
4. have
   1. totally
   2. stupid
   3. wrong
5. numbers
6. this

### Task list

- [x] Checkbox list
- [ ] Push my commits to GitHub
- [ ] One with **inner** html

## Form

<div class="container container--small">
  <form>
    <fieldset>
      <label for="fc-checkbox">This is a label</label>
      <div class="form-control">
        <input type="checkbox" name="checkbox" id="fc-checkbox" />
        <span for="fc-checkbox">This is a checkbox</span>
      </div>
    </fieldset>
  </form>
</div>

## Tables

| key |                                                                                                     value                                                                                                      |
| --- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| 0   |                                                                                                       i                                                                                                        |
| 1   |                                                                                                      love                                                                                                      |
| 2   |                                                                                                     tables                                                                                                     |
| 3   | but sometimes they are so long, that it is really hard to properly format or even style them, so they look good on all devices... all this isn't even long enough to test this shit... dumm di dumm du dumm di |

## Code blocks

```jsx{numberLines: true}
import { Component } from 'react'

class Test extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    // do something on mount here
  }

  // highlight-start
  render() {
    return (
      <>
        <h1>Test {this.props.test}</h1>
        <div dangerouslySetInnerHTML={{ __html: this.props.html }} />
      </>
    )
  }
  // highlight-end
}

export default Test
```

```
Some basic preformated text block
    funny how easy that
                is
```

```bash{outputLines: 3-7}
~/Documents/M8FINDER/API master !1 *1
marvinheilemann@marvin❯ py src/app.py
Traceback (most recent call last):
  File "src/app.py", line 1, in <module>
    from flask import Flask
ModuleNotFoundError: No module named 'flask'
```

## Quotes

> Sleep in the bathroom sink allways wanting food. Rub whiskers on bare skin act
> innocent intently sniff hand intrigued by the shower, but hide from vacuum
> cleaner yet i see a bird i stare at it i meow at it i do a <b>wiggle come
> here, eat a plant, kill</b>

<div class="container container--small">
  <blockquote>
    <p>
      Sleep in the bathroom sink allways wanting food. Rub whiskers on bare skin act innocent intently sniff hand intrigued by the shower.
    </p>
    <footer>
      Marvin Heilemann
    </footer>
  </blockquote>
</div>

## Images

![Caption could be here](img-01.jpg)

[^1]: This reference footnote contains a paragraph...

  - ...and a list
