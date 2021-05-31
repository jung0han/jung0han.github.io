---
id: basic
title: 기본
---

### 줄 바꿈

줄을 바꾸기 위해서는 띄어쓰기 두개를 넣고 라인의 마지막에서 엔터를 입력합니다.

- 이 두 줄의 리스트는
  줄이 바뀌지 않아요.
- 이 두줄의 리스트는  
  줄이 바뀝니다.

### 강조 및 이텔릭

**강조** : `**강조**` 또는 `__강조__` (커멘드 + B)  
_이탤릭_ : `*이탤릭*` 또는 `_이탤릭_`[^emphasize] (커멘트 + I)

### 머릿말

    Header 1
    ========

    Header 2
    ---------

또는

    # Header 1
    ## Header 2
    ### Header 3
    #### Header 4
    ...

### 리스트

- 리스트는 빈 줄 앞에 와야합니다.
- 정렬 되지 않은 리스트는 `*`로 시작합니다.

* `-`로 동일하게 동작합니다.
  - 들여쓰기는 중첩된(Nested) 리스트를 만듭니다.
    1. 정렬된(Ordered) 리스트도 지원합니다.
    2. 각 아이템마다 숫자-점-띄어쓰기로 시작합니다. `1. `
    3. 어떤 숫자로 시작하는지와는 관계 없이 순서대로 나타납니다.

### 블럭

> 꺽쇠 `>`는 블럭을 만들기 위해 사용
> 빈 공간이 없을 경우 기술적으로 매 줄마다 `>`로 시작할 필요가 없습니다.
> 아래의 사례를 참조하세요.
>
> > 블럭은 nested될 수 있습니다.
> >
> > > 멀티플 레벨
> > > 대부분의 마크다운 서식은 블록 안에서도 동작합니다.
>
> - 리스트
> - [링크] [arbitrary_id]
> - 기타

### 인라인 코드

`인라인 코드`는 백틱으로 감싸서 동작 :
`` `인라인 코드` ``

인라인 코드 안에서 백틱을 보여주기 위서는 더블 백틱을 사용 :
``` ``Code with `backticks` `` ```

### 코드 블럭

띄어쓰기 4개를 입력하거나 탭을 한번 누르면 코드 블럭으로 보입니다.

    print('이건 코드 블럭입니다.')
    print('블럭은 앞에 빈줄이 와야 합니다.')
    	print('Nesting은 그대로 보여줍니다.')

#### 블록 포메팅

### 테이블

| 첫 머리말 | 두번째 머리말 |
| --------- | ------------- |
| 내용1     | 내용2         |
| 내용1     | 내용 2        |

```
첫 머리말 | 두번째 머리말
------- | ----------
내용1 | 내용2
내용1 | 내용 2
```

테이블 내용을 정렬하고 싶다면 아래와 같이 작성합니다.

| 왼쪽 정렬   | 중앙 정렬 | 오른쪽 정렬 |
| :---------- | :-------: | ----------: |
| 첫줄        |  아무글   |    1600달러 |
| 두번째 줄   |  가운데   |      12달러 |
| 얼룩말 패턴 |  정돈됨   |       1달러 |

```
| 왼쪽 정렬 | 중앙 정렬 | 오른쪽 정렬 |
| :------ | :------:| --------:|
| 첫줄 | 아무글 | 1600달러|
| 두번째 줄 | 가운데 | 12달러 |
| 얼룩말 패턴 | 정돈됨 | 1달러|
```

### 인라인 포메팅

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

[^4]: You don't have to use a number. Arbitrary things like `[^footy note4]` and `[^footy note4]:` will also work. But they will _render_ as numbered footnotes. Also, no need to keep your footnotes in order, I will sort out the order for you so they appear in the same order they were referenced in the text body. You can even keep some footnotes near where you referenced them, and collect others at the bottom of the file in the traditional place for footnotes
[^emphasize]: If **Underlines** is turned on, `_this notation_` will render as underlined instead of emphasized
[^under]: If **Underline** is disabled `_this_` will be rendered as _emphasized_ instead of being underlined.
[^quote]: **Quote** replaces literal `"` characters with html `<q>` tags. **Quote** and **Smartypants** are syntactically incompatible. If both are enabled, **Quote** takes precedence. Note that **Quote** is different from _blockquote_, which is part of standard Markdown.
[^math]: Internet connection required.
