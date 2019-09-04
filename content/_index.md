---
title: Home
sections:
  - component: content_block.html
    image: /images/logo_w_background.jpg
    type: contentblock
  - component: hero_block.html
    content: >-
      This section can contain a subtitle or tagline. The recommended length is
      one to three sentences, but can be changed as you prefer.
    section_id: hero
    type: heroblock
  - actions:
      - label: Contact Me
        url: /contact
    component: content_block.html
    content: >-
      This is the "about" excerpt. It can be used to provide a paragraph about
      yourself that people can read on the homepage to get a sense of who you
      are. There also exists a dedicated about page where you can write more
      about yourself for those who are interested.
    section_id: about
    title: About
    type: contentblock
  - actions:
      - label: View Blog
        url: blog/index.html
    component: posts_block.html
    num_posts_displayed: 4
    section_id: recent-posts
    title: Recent Posts
    type: postsblock
  - component: content_block.html
    content: >-
      [![Netlify
      Status](https://api.netlify.com/api/v1/badges/e95296ac-8cfb-41a1-bed6-a01c797078a9/deploy-status)](https://app.netlify.com/sites/phxdev-home-f012b/deploys)
    type: contentblock
menu:
  main:
    name: Home
    weight: 1
layout: home
---

