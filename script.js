
const preList=[

"オリゴ糖",
"イヌリン",
"白湯",
"サイリウム",
"バナナ",
"オートミール",
"大麦・もち麦",
"きな粉"

]

const proList=[

"納豆",
"ヨーグルト",
"発酵キムチ",
"整腸剤",
"乳酸菌サプリ",
"オリーブオイル",
"甘酒",
"乳酸菌飲料"

]

function draw(id,list){

const area=
document
.getElementById(id)

list.forEach(f=>{

area.innerHTML+=`

<div class="item">

<label>

<input
type="checkbox">

${f}

</label>

</div>

`

})

}

draw(
"pre",
preList
)

draw(
"pro",
proList
)

function calc(){

let pre=

document
.querySelectorAll(
"#pre input:checked"
)

.length

let pro=

document
.querySelectorAll(
"#pro input:checked"
)

.length

let foodScore=

(pre*5)+
(pro*5)

if(
foodScore>80
)

foodScore=80

let sleep=

Number(
document
.getElementById(
"sleep"
)
.value
)

let sleepScore=0

if(
sleep>=7
&&
sleep<=8
)

sleepScore=10

let wake=

Number(
document
.getElementById(
"wake"
)
.value
)

sleepScore+=
wake*2

let total=

foodScore+
sleepScore

let msg=""

if(
total>=90
)

msg=
"今日はしっかりリカバリーできそう🌙"

else if(
total>=70
)

msg=
"腸と睡眠が整っています"

else

msg=
"今日も小さな積み重ねを"

document
.getElementById(
"result"
)

.innerHTML=

`

🌙 睡眠リカバリースコア

<h1>

${total}点

</h1>

🌱 プレバイオ
${pre}/8

<br>

🦠 プロバイオ
${pro}/8

<br><br>

${msg}

`

}
