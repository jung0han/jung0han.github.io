(self.webpackChunkjung_0_han_github_io=self.webpackChunkjung_0_han_github_io||[]).push([[162],{4560:function(n,e,t){"use strict";t.r(e),t.d(e,{frontMatter:function(){return u},metadata:function(){return c},toc:function(){return m},default:function(){return h}});var a=t(2122),r=t(9756),i=(t(7294),t(3905)),o=["components"],u={},c={unversionedId:"git/manual",id:"git/manual",isDocsHomePage:!1,title:"Manual",description:"\ub9ac\ubaa8\ud2b8 \uc800\uc7a5\uc18c \uad00\ub9ac",source:"@site/docs/git/manual.md",sourceDirName:"git",slug:"/git/manual",permalink:"/docs/git/manual",editUrl:"https://github.com/jung0han/jung0han.github.io/edit/documentation/docs/git/manual.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Basic",permalink:"/docs/markdown/basic"}},m=[{value:"\ub9ac\ubaa8\ud2b8 \uc800\uc7a5\uc18c \uad00\ub9ac",id:"\ub9ac\ubaa8\ud2b8-\uc800\uc7a5\uc18c-\uad00\ub9ac",children:[]},{value:"branch \uc0dd\uc131 \ubc0f merge",id:"branch-\uc0dd\uc131-\ubc0f-merge",children:[]}],s={toc:m};function h(n){var e=n.components,t=(0,r.Z)(n,o);return(0,i.kt)("wrapper",(0,a.Z)({},s,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"\ub9ac\ubaa8\ud2b8-\uc800\uc7a5\uc18c-\uad00\ub9ac"},"\ub9ac\ubaa8\ud2b8 \uc800\uc7a5\uc18c \uad00\ub9ac"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# \ub9ac\ubaa8\ud2b8 \uc800\uc7a5\uc18c \ucd94\uac00\n$ git remote add {name} {url}\n\n# \ub9ac\ubaa8\ud2b8 \uc800\uc7a5\uc18c \ub9ac\uc2a4\ud2b8 \ud655\uc778\n$ git remote -v\n")),(0,i.kt)("h3",{id:"branch-\uc0dd\uc131-\ubc0f-merge"},"branch \uc0dd\uc131 \ubc0f merge"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# 53\ubc88 \uc774\uc288\ub97c \ud574\uacb0\ud558\uae30 \uc704\ud55c issue53 branch \uc0dd\uc131\n$ git branch hotfix\n# \uc0dd\uc131\ud55c branch\ub85c Checkout\n$ git checkout hotfix\n\n# \ud544\uc694\ud55c \ud30c\uc77c\uc744 \uc218\uc815\n$ vim index.html\n# \uc218\uc815\ud55c \ub0b4\uc6a9\uc744 commit\n$ git commit -a -m 'fixed the broken email address'\n\n# master branch\ub85c Checkout\n$ git checkout master\n# master branch\uc5d0 hotfix branch \ub0b4\uc6a9\uc744 merge\n$ git merge hotfix\n")))}h.isMDXComponent=!0}}]);