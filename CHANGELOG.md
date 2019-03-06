# Version 2


## 2.0.0
- start writing change-logs...

#### 2.0.1
- fix fvRange rtl position
- make CancelDetector class ssr ready
- fix Parent class element finding

#### 2.0.2
- fix resize eventListener in Parent class

#### 2.0.3
- fix multi line padding between label and content in fvFormElement

#### 2.0.4
- add static direction helper classes (mentioned in docs, but not in source)

#### 2.0.5
- add inline prop to fvFormElement (mentioned in docs, but not in source)

#### 2.0.6
- use history.back instead of manual hash removing in CancelDetector class

#### 2.0.7
- remove production logs
- fix font-family resets on _reset.scss
- remove hashchanging functionality (bcoz it's throwing an error with vue-router)

#### 2.0.8
- fix #40 (fvInputbox outer box maxHeight)
- fix #39 (fvSelect with **allow-insert** prop doesn't work if user click by mouse on the new item)

#### 2.0.9
- fix fvMenu position. (consider scrollbar size)

#### 2.0.10
- fix illogical blur event in inputbox

#### 2.0.11
- remove data sort method from fvRange (bcoz it's not nessecery and throwing an error)

#### 2.0.12
- add tabindex=-1 attr to days grid in fvDatepicker (bcoz it's throwing an error with keyboard tab click)

## 2.1.0
- refactor fvRange data calculating

#### 2.1.1
- fix fvRange style problem in rtl pages

#### 2.1.2
- fix fvInputbox outerbox outline style
- fix fvToast style in small devices

