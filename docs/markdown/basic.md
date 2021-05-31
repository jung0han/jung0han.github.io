---
sidebar_position: 1
---

# Basic

### Line Breaks

To force a line break, put two spaces and a newline (return) at the end of the line.

- This two-line bullet
  won't break

- This two-line bullet  
  will break

Here is the code:

```
* This two-line bullet
won't break

* This two-line bullet
will break
```

### Strong and Emphasize

**Strong**: `**Strong**` or `__Strong__` (Command-B)  
_Emphasize_: `*Emphasize*` or `_Emphasize_`[^emphasize] (Command-I)

### Headers (like this one!)

    Header 1
    ========

    Header 2
    --------

or

    # Header 1
    ## Header 2
    ### Header 3
    #### Header 4
    ##### Header 5
    ###### Header 6

### Lists

- Lists must be preceded by a blank line (or block element)
- Unordered lists start each item with a `*`

* `-` works too
  - Indent a level to make a nested list
    1. Ordered lists are supported.
    2. Start each item (number-period-space) like `1. `
    3. It doesn't matter what number you use, I will render them sequentially
    4. So you might want to start each line with `1.` and let me sort it out

Here is the code:

```
* Lists must be preceded by a blank line (or block element)
* Unordered lists start each item with a `*`
- `-` works too
	* Indent a level to make a nested list
		1. Ordered lists are supported.
		2. Start each item (number-period-space) like `1. `
		42. It doesn't matter what number you use, I will render them sequentially
		1. So you might want to start each line with `1.` and let me sort it out
```

### Block Quote

> Angle brackets `>` are used for block quotes.  
> Technically not every line needs to start with a `>` as long as
> there are no empty lines between paragraphs.  
> Looks kinda ugly though.
>
> > Block quotes can be nested.
> >
> > > Multiple Levels
>
> Most markdown syntaxes work inside block quotes.
>
> - Lists
> - [Links][arbitrary_id]
> - Etc.

Here is the code:

```
> Angle brackets `>` are used for block quotes.
Technically not every line needs to start with a `>` as long as
there are no empty lines between paragraphs.
> Looks kinda ugly though.
> > Block quotes can be nested.
> > > Multiple Levels
>
> Most markdown syntaxes work inside block quotes.
>
> * Lists
> * [Links][arbitrary_id]
> * Etc.
```

### Inline Code

`Inline code` is indicated by surrounding it with backticks:  
`` `Inline code` ``

If your `` code has `backticks`  `` that need to be displayed, you can use double backticks:  
``` ``Code with `backticks` `` ``` (mind the spaces preceding the final set of backticks)

### Block Code

If you indent at least four spaces or one tab, I'll display a code block.

    print('This is a code block')
    print('The block must be preceded by a blank line')
    print('Then indent at least 4 spaces or 1 tab')
    	print('Nesting does nothing. Your code is displayed Literally')

I also know how to do something called [Fenced Code Blocks](#fenced-code-block) which I will tell you about later.

### Document Formatting

The **_Smartypants_** extension automatically transforms straight quotes (`"` and `'`) in your text into typographer’s quotes (`“`, `”`, `‘`, and `’`) according to the context. Very useful if you’re a typography freak like I am. Quote and Smartypants are syntactically incompatible. If both are enabled, Quote takes precedence.

### Block Formatting

#### Table

This is a table:

| First Header | Second Header |
| ------------ | ------------- |
| Content Cell | Content Cell  |
| Content Cell | Content Cell  |

```
| First Header | Second Header |
| ------------ | ------------- |
| Content Cell | Content Cell  |
| Content Cell | Content Cell  |
```

You can align cell contents with syntax like this:

| Left Aligned  | Center Aligned  | Right Aligned |
| :------------ | :-------------: | ------------: |
| col 3 is      | some wordy text |         $1600 |
| col 2 is      |    centered     |           $12 |
| zebra stripes |    are neat     |            $1 |

```
| Left Aligned  | Center Aligned  | Right Aligned |
| :------------ | :-------------: | ------------: |
| col 3 is      | some wordy text |         $1600 |
| col 2 is      |    centered     |           $12 |
| zebra stripes |    are neat     |            $1 |
```

The left- and right-most pipes (`|`) are only aesthetic, and can be omitted. The spaces don’t matter, either. Alignment depends solely on `:` marks.

#### <a name="fenced-code-block">Fenced Code Block</a>

This is a fenced code block:

```
print('Hello world!')
```

You can also use waves (`~`) instead of back ticks (`` ` ``):

```
print('Hello world!')
```

You can add an optional language ID at the end of the first line. The language ID will only be used to highlight the code inside if you tick the **_Enable highlighting in code blocks_** option. This is what happens if you enable it:

![Syntax highlighting example](http://d.pr/i/9HM6+)

I support many popular languages as well as some generic syntax descriptions that can be used if your language of choice is not supported. See [relevant sections on the official site](http://macdown.uranusjr.com/features/) for a full list of supported syntaxes.

### Inline Formatting

The following is a list of optional inline markups supported:

| Option name         | Markup           | Result if enabled    |
| ------------------- | ---------------- | -------------------- |
| Intra-word emphasis | So A\*maz\*ing   | So A<em>maz</em>ing  |
| Strikethrough       | \~~Much wow\~~   | <del>Much wow</del>  |
| Underline [^under]  | \_So doge\_      | <u>So doge</u>       |
| Quote [^quote]      | \"Such editor\"  | <q>Such editor</q>   |
| Highlight           | \==So good\==    | <mark>So good</mark> |
| Superscript         | hoge\^(fuga)     | hoge<sup>fuga</sup>  |
| Autolink            | http://t.co      | <http://t.co>        |
| Footnotes           | [\^4] and [\^4]: | [^4] and footnote 4  |

[^4]: You don't have to use a number. Arbitrary things like `[^footy note4]` and `[^footy note4]:` will also work. But they will _render_ as numbered footnotes. Also, no need to keep your footnotes in order, I will sort out the order for you so they appear in the same order they were referenced in the text body. You can even keep some footnotes near where you referenced them, and collect others at the bottom of the file in the traditional place for footnotes.
[^emphasize]: If **Underlines** is turned on, `_this notation_` will render as underlined instead of emphasized
[^under]: If **Underline** is disabled `_this_` will be rendered as _emphasized_ instead of being underlined.
[^quote]: **Quote** replaces literal `"` characters with html `<q>` tags. **Quote** and **Smartypants** are syntactically incompatible. If both are enabled, **Quote** takes precedence. Note that **Quote** is different from _blockquote_, which is part of standard Markdown.
[^math]: Internet connection required.
