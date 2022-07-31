# [Blogged](https://tural-blogged.herokuapp.com)

You can access the blog from [Blogged](https://tural-blogged.herokuapp.com) here


## Main packages used for development

```
    "@tailwindcss/typography" - Customize typography for articles
    "antd" - Custom UI components
    "gray-matter" - Add data to markdown files
    "markdown-it" - Tool to convert markdown to html elements
    "sass": - css preprocessor
```

## How to run the dev server

```
yarn
yarn dev
```

## How to run a production server

```
yarn
yarn build
yarn start
```

### How to create a new article

1. Create a new `.md` file. The content of the markdown file should be like this:

```
---
title: 'title_of_article'
date: 'date_of_article'
author: 'author_of_article'
description: 'description_of_article'
tags:
  - [list_of tags]
---
{markdown_content}
```

Possible tags:

```
  development, life, startup, travel, technology, tools, business, frontend, backend, 'data-science', book, movie'
```

2. Add this file under the `/posts` folder


4. Create a new commit to update the repo. To create a new commit, follow these commands
After the pipeline, a new article will be accessible.

