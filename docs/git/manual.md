# Manual

### 리모트 저장소 관리

```bash
# 리모트 저장소 추가
$ git remote add {name} {url}

# 리모트 저장소 리스트 확인
$ git remote -v
```

### branch 생성 및 merge

```bash
# 53번 이슈를 해결하기 위한 issue53 branch 생성
$ git branch hotfix
# 생성한 branch로 Checkout
$ git checkout hotfix

# 필요한 파일을 수정
$ vim index.html
# 수정한 내용을 commit
$ git commit -a -m 'fixed the broken email address'

# master branch로 Checkout
$ git checkout master
# master branch에 hotfix branch 내용을 merge
$ git merge hotfix
```
