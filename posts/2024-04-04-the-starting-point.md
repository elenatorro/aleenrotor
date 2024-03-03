---
title: The starting point
description: We all need to start from somewhere
date: 2024-03-04
tags:
  - p5.js
layout: layouts/post.njk
---

### Now what?

When it comes to learn or to start something, you need a trigger. A first stone. It's ok to make plans, write next steps, imagine the future. But to get into that future, you have to stop thinking of how would it be and start creating.

If you're getting into something new, to the unkwnown, it gets a bit harder. There's no path. How do you navigate the darkness without guidance?

Create something small, affordable, easy to understand. Identify the tool, the format, and what drives you to that starting point. The motive.

In my case, I'm currently feeling quite lonely, I feel there's something I'm missing that I can't reach. **That's the _motive_**.

I'm writing in this new blog, understanding how it works, posting it out there. **That's the _format_**.

As I don't want to learn something new but to play with something familiar, I'll use p5.js. **That's the _tool_**.

### It's all about points

One of the most basic shapes you can do in p5.js is a point. Or, more precisely, a **circle**. I wanted to represent a lonely point, surrounded by many other points but separated from them. The code is not beautiful, but that's not the purpose. You can open the [p5.js editor](https://editor.p5js.org/) and play with this simple algorithm a little bit.

#### The code

```js
function setup() {
  createCanvas(600, 800);
  background(0, 0, 0);
  stroke(0);
  fill("#ffecc0");
  rect(0, 0, width, height);
  noStroke();

  const circle_size = 5;
  const grouth_factor = 3;
  const radius = circle_size * 10 + circle_size;
  const movement_factor = 5;
  const pos_x = width - ((circle_size * 2 + circle_size) * 7);
  const pos_y = height - ((circle_size * 2 + circle_size)) * 15;
  const color_palette = ["#b80c09", "#95191d", "#79242d", "#632d3a", "#513444", "#43394c", "#0b4f6c", "#01baef"]

  for (let i = circle_size; i < width; i+= circle_size * 2) {
    for (let j = circle_size; j < height; j+= circle_size * 2) {
      const cirlce_size_change = circle_size + random(grouth_factor * - 1, grouth_factor);
      const movement_x = random(-(circle_size / movement_factor), circle_size / movement_factor)
      const movement_y = random(-(circle_size / movement_factor), circle_size / movement_factor)
      const random_color_number = floor(random(0, (color_palette.length - 1)))
      const dot_color = color_palette[random_color_number];

      if (i == pos_x && j == pos_y) {
        fill(0, 0, 0);
        circle(i, j, circle_size / 1.5);
        fill(255, 255, 255);
      } else if ((i >= pos_x - radius && j >= pos_y + radius) ||
          (i <= pos_x + radius && j <= pos_y - radius) || 
          (i <= pos_x - radius && j >= pos_y - radius) ||
          (i >= pos_x + radius && j <= pos_y + radius)
      ) {
        fill(dot_color);
        circle(i + movement_x, j + movement_y, cirlce_size_change);
        fill(255, 255, 255);
      }
    }
  }
}
```

#### The output

<section class="gallery">
    <img src="{{ '/img/loneliness/loneliness_1.png' | url }}" />
    <img src="{{ '/img/loneliness/loneliness_2.png' | url }}" />
    <img src="{{ '/img/loneliness/loneliness_3.png' | url }}" />
    <img src="{{ '/img/loneliness/loneliness_4.png' | url }}" />
    <img src="{{ '/img/loneliness/loneliness_5.png' | url }}" />
    <img src="{{ '/img/loneliness/loneliness_6.png' | url }}" />
</section>
