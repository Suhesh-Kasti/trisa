document.addEventListener("DOMContentLoaded", function() {
  // Get the required HTML elements
  const questionTextElement = document.getElementById('question-word');
  const userInputElement = document.getElementById('user-input');
  const feedbackMessageElement = document.getElementById('feedback-word');
  const confirmButton = document.getElementById('confirm-button');
  const scoreElement = document.getElementById('score-word');

// Get the code from the query parameter or the window.quizCode variable
var urlParams = new URLSearchParams(window.location.search);
var codeFromUrl = urlParams.get('code');
var wordCode = codeFromUrl || window.wordCode // Use code from URL, window.quizCode variable, or default to "h01"

  // Define question sets
  const questionSets = {
"hira01":  [
  { "correctAnswer": "あ", "question": "What is the following sound in hiragana: a" },
  { "correctAnswer": "い", "question": "What is the following sound in hiragana: i" },
  { "correctAnswer": "う", "question": "What is the following sound in hiragana: u" },
  { "correctAnswer": "え", "question": "What is the following sound in hiragana: e" },
  { "correctAnswer": "お", "question": "What is the following sound in hiragana: o" },
  { "correctAnswer": "か", "question": "What is the following sound in hiragana: ka" },
  { "correctAnswer": "き", "question": "What is the following sound in hiragana: ki" },
  { "correctAnswer": "く", "question": "What is the following sound in hiragana: ku" },
  { "correctAnswer": "け", "question": "What is the following sound in hiragana: ke" },
  { "correctAnswer": "こ", "question": "What is the following sound in hiragana: ko" },
  { "correctAnswer": "さ", "question": "What is the following sound in hiragana: sa" },
  { "correctAnswer": "し", "question": "What is the following sound in hiragana: shi" },
  { "correctAnswer": "す", "question": "What is the following sound in hiragana: su" },
  { "correctAnswer": "せ", "question": "What is the following sound in hiragana: se" },
  { "correctAnswer": "そ", "question": "What is the following sound in hiragana: so" },
  { "correctAnswer": "た", "question": "What is the following sound in hiragana: ta" },
  { "correctAnswer": "ち", "question": "What is the following sound in hiragana: chi" },
  { "correctAnswer": "つ", "question": "What is the following sound in hiragana: tsu" },
  { "correctAnswer": "て", "question": "What is the following sound in hiragana: te" },
  { "correctAnswer": "と", "question": "What is the following sound in hiragana: to" },
  { "correctAnswer": "な", "question": "What is the following sound in hiragana: na" },
  { "correctAnswer": "に", "question": "What is the following sound in hiragana: ni" },
  { "correctAnswer": "ぬ", "question": "What is the following sound in hiragana: nu" },
  { "correctAnswer": "ね", "question": "What is the following sound in hiragana: ne" },
  { "correctAnswer": "の", "question": "What is the following sound in hiragana: no" },
  { "correctAnswer": "は", "question": "What is the following sound in hiragana: ha" },
  { "correctAnswer": "ひ", "question": "What is the following sound in hiragana: hi" },
  { "correctAnswer": "ふ", "question": "What is the following sound in hiragana: fu" },
  { "correctAnswer": "へ", "question": "What is the following sound in hiragana: he" },
  { "correctAnswer": "ほ", "question": "What is the following sound in hiragana: ho" },
  { "correctAnswer": "ま", "question": "What is the following sound in hiragana: ma" },
  { "correctAnswer": "み", "question": "What is the following sound in hiragana: mi" },
  { "correctAnswer": "む", "question": "What is the following sound in hiragana: mu" },
  { "correctAnswer": "め", "question": "What is the following sound in hiragana: me" },
  { "correctAnswer": "も", "question": "What is the following sound in hiragana: mo" },
  { "correctAnswer": "や", "question": "What is the following sound in hiragana: ya" },
  { "correctAnswer": "ゆ", "question": "What is the following sound in hiragana: yu" },
  { "correctAnswer": "よ", "question": "What is the following sound in hiragana: yo" },
  { "correctAnswer": "ら", "question": "What is the following sound in hiragana: ra" },
  { "correctAnswer": "り", "question": "What is the following sound in hiragana: ri" },
  { "correctAnswer": "る", "question": "What is the following sound in hiragana: ru" },
  { "correctAnswer": "れ", "question": "What is the following sound in hiragana: re" },
  { "correctAnswer": "ろ", "question": "What is the following sound in hiragana: ro" },
  { "correctAnswer": "わ", "question": "What is the following sound in hiragana: wa" },
  { "correctAnswer": "を", "question": "What is the following sound in hiragana: wo" },
  { "correctAnswer": "ん", "question": "What is the following sound in hiragana: n" },
  // ... Add more hiragana questions as needed
  ],

  "hira11": [
{"correctAnswer":"ねこがいます","question":"How do you say 'I have a cat' in hiragana?"},
{"correctAnswer":"さくらのはなが","question":"What is the following sound in hiragana: sakura no hana ga"},
{"correctAnswer":"おはよう","question":"What is the following sound in hiragana: ohayoo"},
{"correctAnswer":"おはようございます","question":"Good morning in Japanese is..."},
{"correctAnswer":"しつれいします","question":"What is the following sound in hiragana: shitsure-shimasu"},
{"correctAnswer":"ありがとう","question":"Express your gratitude in hiragana."},
{"correctAnswer":"たべました","question":"What is the following sound in hiragana: tabemashita"},
{"correctAnswer":"げんきですか","question":"In hiragana, how would you ask 'How are you?'"},
{"correctAnswer":"ここです","question":"What is the following sound in hiragana: kokodesu"},
{"correctAnswer":"わたしのなまえはじょんです","question":"Translate 'My name is John' in hiragana."},
{"correctAnswer":"ありがとうございます","question":"What is the following sound in hiragana: arigatoo gozaimasu"},
{"correctAnswer":"これはほんです","question":"How would you say 'This is a book' in hiragana?"},
{"correctAnswer":"おなまえはなんですか","question":"What is the following sound in hiragana: onamae wa nan desu ka"},
{"correctAnswer":"にほんごがむずかしいです","question":"Express 'Japanese is difficult' in hiragana."},
{"correctAnswer":"これはペンです","question":"What is the following sound in hiragana: kore wa pen desu"},
{"correctAnswer":"きょうはどようびです","question":"Today is Saturday. Say it in hiragana."},
{"correctAnswer":"わたしはがくせいです","question":"What is the following sound in hiragana: watashi wa gakusee desu"},
{"correctAnswer":"さくらのはながさいています","question":"Translate 'The cherry blossoms are blooming' to hiragana."},
{"correctAnswer":"あのひとはせいきゅうです","question":"What is the following sound in hiragana: ano hito wa seekyu desu"},
{"correctAnswer":"とうきょうにいきました","question":"Say 'I went to Tokyo' in hiragana."},
{"correctAnswer":"ごみをすてました","question":"What is the following sound in hiragana: gomi wo sutemashita"},
{"correctAnswer":"あのしょうねんはかしこいです","question":"How would you say 'That boy is smart' in hiragana?"},
{"correctAnswer":"すきいがすきです","question":"What is the following sound in hiragana: sukii ga suki desu"},
{"correctAnswer":"きのうあめがふりました","question":"It rained yesterday. Express this in hiragana."},
{"correctAnswer":"かいものにいきました","question":"What is the following sound in hiragana: kaimono ni ikimashita"},
{"correctAnswer":"あしたはてんきがいいそうです","question":"Translate 'Tomorrow the weather seems good' to hiragana."},
{"correctAnswer":"そのほんはたかいですね","question":"What is the following sound in hiragana: sono hon wa takai desu ne"},
{"correctAnswer":"わたしのくるまはあかいです","question":"My car is red. Say this in hiragana."},
{"correctAnswer":"あしたあめがふるかもしれません","question":"What is the following sound in hiragana: ashita ame ga furu kamoshiremasen"},
{"correctAnswer":"かれはえいごがじょうずです","question":"He is good at English. Hiragana, please."},
{"correctAnswer":"このてんはいつごろはじまりますか","question":"What is the following sound in hiragana: kono ten wa itsugoro hajimarimasu ka"},
{"correctAnswer":"このりんごはおいしいですね","question":"Isn't this apple delicious? Ask in hiragana."},
{"correctAnswer":"さんじかんかかりました","question":"What is the following sound in hiragana: sanjikan kakarimashita"},
{"correctAnswer":"わたしはごはんをたべました","question":"I ate rice. Hiragana translation?"},
{"correctAnswer":"ごしょくじゃがいましたか","question":"What is the following sound in hiragana: goshoku ja gaimashita ka"},
{"correctAnswer":"きょうはうんどうぶです","question":"It's cloudy today. Say it in hiragana."},
{"correctAnswer":"たいしかんがいりました","question":"What is the following sound in hiragana: taishikan ga irimashita"},
{"correctAnswer":"あのひとはがくせいです","question":"That person is a student. Hiragana, please."},
{"correctAnswer":"かのひとはきょうねました","question":"What is the following sound in hiragana: kano hito wa kyoo nemashita"},
{"correctAnswer":"きょうはえあこんがありません","question":"Unfortunately, there is no air conditioning today. Hiragana?"},
{"correctAnswer":"そのちょうしゃはいつもさむいです","question":"What is the following sound in hiragana: sono choosha wa itsumo samui desu"},
{"correctAnswer":"かのじょはびょうきです","question":"She is sick. How to say this in hiragana?"},
{"correctAnswer":"げんごがむずかしいです","question":"What is the following sound in hiragana: gengo ga muzukashii desu"},
{"correctAnswer":"このほんはたかいですね","question":"This book is expensive, isn't it? Ask in hiragana."},
{"correctAnswer":"かれはもうやめました","question":"What is the following sound in hiragana: kare wa moo yamemashita"},
{"correctAnswer":"わたしはねむりすぎました","question":"I overslept. Say this in hiragana."},
{"correctAnswer":"かいしゃはむりょくしています","question":"What is the following sound in hiragana: kaisha wa muryoku shite imasu"},
{"correctAnswer":"きのうでぱーとにいきました","question":"Yesterday I went to the department store. Hiragana translation?"},
{"correctAnswer":"くもりそらでした","question":"What is the following sound in hiragana: kumori sora deshita"},
{"correctAnswer":"そのくつはくろいです","question":"Those shoes are black. Express this in hiragana."},
{"correctAnswer":"かのしょうばいてんはそこです","question":"What is the following sound in hiragana: kano shoobaiten wa soko desu"},
{"correctAnswer":"あめがふっています","question":"It's raining. How to say this in hiragana?"},
{"correctAnswer":"やまださんはにほんごがじょうずです","question":"What is the following sound in hiragana: yamada san wa nihongo ga joozu desu"},
{"correctAnswer":"かれはべんきょうしました","question":"He studied. Hiragana translation, please."},
{"correctAnswer":"きのうわたくさんひこうきにのりました","question":"What is the following sound in hiragana: kinoo watakushi wa takusan hikooki ni norimashita"},
{"correctAnswer":"このそばはまずいですね","question":"This soba noodle dish is not tasty, is it? Ask in hiragana."},
{"correctAnswer":"みせでかおりとしわさがしにいきました","question":"What is the following sound in hiragana: mise de kaori to shiwa sagashi ni kuimashita"},
{"correctAnswer":"きのうわたしにほんごのてすとがありました","question":"I had a Japanese test yesterday. Say this in hiragana."},
{"correctAnswer":"こころがゆれています","question":"What is the following sound in hiragana: kokoro ga yurete imasu"},
{"correctAnswer":"かのひとはでぱーとではたらいています","question":"That person works at a department store. Hiragana translation?"},
{"correctAnswer":"ぎんこうでおかねをとりだしました","question":"What is the following sound in hiragana: ginkou de okane wo toridashimashita"},
{"correctAnswer":"わたしのくるまはふるいです","question":"My car is old. Express this in hiragana."},
{"correctAnswer":"くうこうでぼーいんぐのひこうきをみました","question":"What is the following sound in hiragana: kuukou de booingu no hikooki wo mimashita"},
{"correctAnswer":"きょねんりんごがおおくできました","question":"Many apples were harvested last year. Hiragana, please."},
{"correctAnswer":"あいてはちょうできれいでした","question":"What is the following sound in hiragana: aite wa choodekireii deshita"},
{"correctAnswer":"てがみをかきました","question":"I wrote a letter. How to say this in hiragana?"},
{"correctAnswer":"このさーばーはごーいんぐしています","question":"What is the following sound in hiragana: kono saabaa wa gooingu shite imasu"},
{"correctAnswer":"ほんをよみましたか","question":"Did you read a book? Ask in hiragana."},
{"correctAnswer":"ゆっかなようですがじつはむずかしいです","question":"What is the following sound in hiragana: yukkana you desu ga jitsu wa muzukashii desu"},
{"correctAnswer":"きのうとうきょうでぱーてぃーがありました","question":"There was a party in Tokyo last Saturday night. Hiragana?"},
{"correctAnswer":"このばっかりいはおにゅうです","question":"What is the following sound in hiragana: kono bakkariii wa oniuu desu"},
{"correctAnswer":"これはわたしのかばんです","question":"This is my bag. Say it in hiragana."},
{"correctAnswer":"ありがとうございました","question":"What is the following sound in hiragana: arigatoo gozaimashita"},
{"correctAnswer":"かのひとはからだがよわっています","question":"That person has a weak body. Express this in hiragana."},
{"correctAnswer":"きょうわたくさんなにもできませんでした","question":"What is the following sound in hiragana: kyoo watakushi wa takusan nani mo dekimasen deshita"},
{"correctAnswer":"そのすぽーつからにゅうしょをもらったでしょうか","question":"Did you receive any prizes from that sport? Ask in hiragana."},
{"correctAnswer":"ぱーふぇくとではありません","question":"What is the following sound in hiragana: paafekuto de wa arimasen"},
{"correctAnswer":"かれはもうやめました","question":"He has already quit. Hiragana translation?"},
{"correctAnswer":"わたくしのちゅうごくごりょくはそれほどよくありません","question":"What is the following sound in hiragana: watakushi no chuugokugoryokoo wa sorehodo yokuarimasen"},
{"correctAnswer":"せーたーがにがてです","question":"The sweater doesn't fit me well. How to say this in hiragana?"},
{"correctAnswer":"かのおぺれーたーはしょうひんがきんじょです","question":"What is the following sound in hiragana: kano opereetaa wa shoohin ga kinjodesu"},
{"correctAnswer":"くうこうでひこうきがとんでいます","question":"A plane is taking off at the airport. Express in hiragana."},
{"correctAnswer":"かれはまだやくしていません","question":"What is the following sound in hiragana: kare wa mada yakushite imasen"},
{"correctAnswer":"げんきなこどもばかりでした","question":"They were all energetic children. Hiragana, please."},
{"correctAnswer":"わたくしはねむりすぎています","question":"What is the following sound in hiragana: watakushi wa nemurisugite imasune"},
{"correctAnswer":"このちょこれーとはあまくておいしいです","question":"This chocolate is sweet and delicious. Say it in hiragana."},
{"correctAnswer":"あのこどもはもうおなかがすいています","question":"What is the following sound in hiragana: ano kodomo wa moo onaka ga suite imasu"},
{"correctAnswer":"せんしゃはきれいなえでした","question":"The sashimi platter looked beautiful. How to express in hiragana?"},
{"correctAnswer":"あれはきのうにかいたですね","question":"What is the following sound in hiragana: are wa kinouni kaitadesu ne"},
{"correctAnswer":"あのばいおりんしすとはすごくじょうずでした","question":"That violinist was truly excellent. Hiragana translation?"},
{"correctAnswer":"そのいなかのひとはなんですか","question":"What is the following sound in hiragana: sono inakanohito wa nan desu ka"},
{"correctAnswer":"かれはそのさくひんにてんさいしなければなりませんでした","question":"He could not help but admire that masterpiece. Say it in hiragana."},
{"correctAnswer":"このけーきはおいしいそうです","question":"What is the following sound in hiragana: kono keekii ga oishii soo desu"},
{"correctAnswer":"このけーきはよくあまくておいしくありません","question":"This cake is not very sweet and not very delicious. Hiragana?"},
{"correctAnswer":"ますたーはしきにときどきもどります","question":"What is the following sound in hiragana: masutaa wa shikini tokidoki modori masu"},
{"correctAnswer":"わたくしのせいとはむりょくしています","question":"My company is going bankrupt. Express this in hiragana."},
{"correctAnswer":"くちびるがかわいた","question":"What is the following sound in hiragana: kuchibiru ga kawaita"},
{"correctAnswer":"のどがかわいているのでここあをのみました","question":"What is the following sound in hiragana: nodo ga kawaite iru node kokoa o nomimashita"},
{"correctAnswer":"まえじゅうがたおれました","question":"What is the following sound in hiragana: mae juu ga taoremashita"},
{"correctAnswer":"きょうはまごつえんどいっとぞん","question":"What is the following sound in hiragana: kyou wa magotsuendoittozons"},
{"correctAnswer":"もうすこしまってください","question":"What is the following sound in hiragana: mou sukoshi matte kudasai"},
{"correctAnswer":"ぱーふぇくとなのか","question":"What is the following sound in hiragana: paafekuto na no ka"},
{"correctAnswer":"らーめんをたべるでしょうか","question":"What is the following sound in hiragana: raamen wo taberu deshoo ka"}
    ],
"hira21":[
{ "correctAnswer": "くるまはあかいです。", "question": "Translate the following sentence into hiragana: The car is red." },
{ "correctAnswer": "わたしはにほんごをべんきょうしています。", "question": "Translate the following sentence into hiragana: I am studying Japanese." },
{ "correctAnswer": "さくらんぼがすきですか。", "question": "Translate the following sentence into hiragana: Do you like cherries?" },
{ "correctAnswer": "たなかさんはいえにいます。", "question": "Translate the following sentence into hiragana: Tanaka-san is at home." },
{ "correctAnswer": "わたしのともだちはいもうとです。", "question": "Translate the following sentence into hiragana: My friend is my younger sister." },
{ "correctAnswer": "へやはちいさいですが、きれいです。", "question": "Translate the following sentence into hiragana: The room is small but clean." },
{ "correctAnswer": "あさごはんをたべましたか。", "question": "Translate the following sentence into hiragana: Did you eat breakfast?" },
{ "correctAnswer": "くじらはおおきいです。", "question": "Translate the following sentence into hiragana: The whale is big." },
{ "correctAnswer": "ほんをよみます。", "question": "Translate the following sentence into hiragana: I read a book." },
{ "correctAnswer": "わたしのかさはあおいです。", "question": "Translate the following sentence into hiragana: My umbrella is blue." },
{ "correctAnswer": "きょうはあついですね。", "question": "Translate the following sentence into hiragana: It's hot today, isn't it?" },
{ "correctAnswer": "あしたはあめです。", "question": "Translate the following sentence into hiragana: Tomorrow will be rainy." },
{ "correctAnswer": "あそこにねこがいます。", "question": "Translate the following sentence into hiragana: There is a cat over there." },
{ "correctAnswer": "にほんごがわかりますか。", "question": "Translate the following sentence into hiragana: Do you understand Japanese?" },
{ "correctAnswer": "わたしのともだちはにほんじんです。", "question": "Translate the following sentence into hiragana: My friend is Japanese." },
{ "correctAnswer": "たなかさんはきれいなくるまをもっています。", "question": "Translate the following sentence into hiragana: Tanaka-san has a beautiful car." },
{ "correctAnswer": "わたしはりんごをたべます。", "question": "Translate the following sentence into hiragana: I eat apples." },
{ "correctAnswer": "わたしはとうきょうにすんでいます。", "question": "Translate the following sentence into hiragana: I live in Tokyo." },
{ "correctAnswer": "にわにはいくつのはながありますか。", "question": "Translate the following sentence into hiragana: How many flowers are in the garden?" },
{ "correctAnswer": "わたしのいもうとはたかいです。", "question": "Translate the following sentence into hiragana: My younger sister is tall." },
{ "correctAnswer": "あしたはたいふうです。", "question": "Translate the following sentence into hiragana: Tomorrow will be typhoon." },
{ "correctAnswer": "わたしはいもうととえいがをみます。", "question": "Translate the following sentence into hiragana: I watch movies with my younger sister." },
{ "correctAnswer": "にわにはくろいねこがいます。", "question": "Translate the following sentence into hiragana: There is a black cat in the garden." },
{ "correctAnswer": "あなたのくるまはなんいろですか。", "question": "Translate the following sentence into hiragana: What color is your car?" },
{ "correctAnswer": "きょうはひまです。", "question": "Translate the following sentence into hiragana: I am free today." },
{ "correctAnswer": "あなたのてがみをかきます。", "question": "Translate the following sentence into hiragana: I write your letter." },
{ "correctAnswer": "わたしはさかながすきです。", "question": "Translate the following sentence into hiragana: I like fish." },
{ "correctAnswer": "にわはあおいです。", "question": "Translate the following sentence into hiragana: The garden is blue." },
{ "correctAnswer": "ねこはあるいています。", "question": "Translate the following sentence into hiragana: The cat is walking." },
{ "correctAnswer": "いちにちにきれいなはながさいています。", "question": "Translate the following sentence into hiragana: Beautiful flowers bloom in a day." },
{ "correctAnswer": "はこのうえになにがありますか。", "question": "Translate the following sentence into hiragana: What is on the table?" },
{ "correctAnswer": "わたしはあしたびょういんへいきます。", "question": "Translate the following sentence into hiragana: I will go to the hospital tomorrow." },
{ "correctAnswer": "いつもあかいくるまをみます。", "question": "Translate the following sentence into hiragana: I always see a red car." },
{ "correctAnswer": "きょうはさむいです。", "question": "Translate the following sentence into hiragana: It's cold today." },
{ "correctAnswer": "わたしはにんぎょうがすきです。", "question": "Translate the following sentence into hiragana: I like dolls." },
{ "correctAnswer": "あなたのかさはおおきいですか。", "question": "Translate the following sentence into hiragana: Is your umbrella big?" },
{ "correctAnswer": "きょうはゆうめいなえいがをみます。", "question": "Translate the following sentence into hiragana: I will watch a famous movie today." },
{ "correctAnswer": "いっしょにえいがをみましょう。", "question": "Translate the following sentence into hiragana: Let's watch a movie together." },
{ "correctAnswer": "あさごはんはなにをたべますか。", "question": "Translate the following sentence into hiragana: What do you eat for breakfast?" },
{ "correctAnswer": "わたしはははとてがみをかきます。", "question": "Translate the following sentence into hiragana: I write a letter with my mother." },
{ "correctAnswer": "はははみずをのみます。", "question": "Translate the following sentence into hiragana: Mother drinks water." },
{ "correctAnswer": "いもうとはねこをかいます。", "question": "Translate the following sentence into hiragana: My younger sister buys a cat." },
{ "correctAnswer": "ともだちはほんをよみます。", "question": "Translate the following sentence into hiragana: My friend reads a book." },
{ "correctAnswer": "ねこはまどのそとでねます。", "question": "Translate the following sentence into hiragana: The cat sleeps outside the window." },
{ "correctAnswer": "わたしはにわでぼうしをかぶります。", "question": "Translate the following sentence into hiragana: I wear a hat in the garden." },
{ "correctAnswer": "あなたのともだちはいつもがっこうへいきますか。", "question": "Translate the following sentence into hiragana: Does your friend always go to school?" },
{ "correctAnswer": "きょうははるです。", "question": "Translate the following sentence into hiragana: Today is spring." },
{ "correctAnswer": "わたしはくうこうでにんぎょうをかいます。", "question": "Translate the following sentence into hiragana: I buy a doll at the airport." },
{ "correctAnswer": "にわのきにとりがいます。", "question": "Translate the following sentence into hiragana: There are birds on the tree in the garden." },
{ "correctAnswer": "わたしはいえでいえがをねます。", "question": "Translate the following sentence into hiragana: I sleep with my cat at home." }
],

  "kata02": [
  { "correctAnswer": "エ", "question": "What is the following sound in katakana: e" },
  { "correctAnswer": "オ", "question": "What is the following sound in katakana: o" },
  { "correctAnswer": "カ", "question": "What is the following sound in katakana: ka" },
  { "correctAnswer": "キ", "question": "What is the following sound in katakana: ki" },
  { "correctAnswer": "ク", "question": "What is the following sound in katakana: ku" },
  { "correctAnswer": "ケ", "question": "What is the following sound in katakana: ke" },
  { "correctAnswer": "コ", "question": "What is the following sound in katakana: ko" },
  { "correctAnswer": "サ", "question": "What is the following sound in katakana: sa" },
  { "correctAnswer": "シ", "question": "What is the following sound in katakana: shi" },
  { "correctAnswer": "ス", "question": "What is the following sound in katakana: su" },
  { "correctAnswer": "セ", "question": "What is the following sound in katakana: se" },
  { "correctAnswer": "ソ", "question": "What is the following sound in katakana: so" },
  { "correctAnswer": "タ", "question": "What is the following sound in katakana: ta" },
  { "correctAnswer": "チ", "question": "What is the following sound in katakana: chi" },
  { "correctAnswer": "ツ", "question": "What is the following sound in katakana: tsu" },
  { "correctAnswer": "テ", "question": "What is the following sound in katakana: te" },
  { "correctAnswer": "ト", "question": "What is the following sound in katakana: to" },
  { "correctAnswer": "ナ", "question": "What is the following sound in katakana: na" },
  { "correctAnswer": "ニ", "question": "What is the following sound in katakana: ni" },
  { "correctAnswer": "ヌ", "question": "What is the following sound in katakana: nu" },
  { "correctAnswer": "ネ", "question": "What is the following sound in katakana: ne" },
  { "correctAnswer": "ノ", "question": "What is the following sound in katakana: no" },
  { "correctAnswer": "ハ", "question": "What is the following sound in katakana: ha" },
  { "correctAnswer": "ヒ", "question": "What is the following sound in katakana: hi" },
  { "correctAnswer": "フ", "question": "What is the following sound in katakana: fu" },
  { "correctAnswer": "ヘ", "question": "What is the following sound in katakana: he" },
  { "correctAnswer": "ホ", "question": "What is the following sound in katakana: ho" },
  { "correctAnswer": "マ", "question": "What is the following sound in katakana: ma" },
  { "correctAnswer": "ミ", "question": "What is the following sound in katakana: mi" },
  { "correctAnswer": "ム", "question": "What is the following sound in katakana: mu" },
  { "correctAnswer": "メ", "question": "What is the following sound in katakana: me" },
  { "correctAnswer": "モ", "question": "What is the following sound in katakana: mo" },
  { "correctAnswer": "ヤ", "question": "What is the following sound in katakana: ya" },
  { "correctAnswer": "ユ", "question": "What is the following sound in katakana: yu" },
  { "correctAnswer": "ヨ", "question": "What is the following sound in katakana: yo" },
  { "correctAnswer": "ラ", "question": "What is the following sound in katakana: ra" },
  { "correctAnswer": "リ", "question": "What is the following sound in katakana: ri" },
  { "correctAnswer": "ル", "question": "What is the following sound in katakana: ru" },
  { "correctAnswer": "レ", "question": "What is the following sound in katakana: re" },
  { "correctAnswer": "ロ", "question": "What is the following sound in katakana: ro" },
  { "correctAnswer": "ワ", "question": "What is the following sound in katakana: wa" },
  { "correctAnswer": "ヲ", "question": "What is the following sound in katakana: wo" },
  { "correctAnswer": "ン", "question": "What is the following sound in katakana: n" },
  // ... Add more katakana questions as needed 
],

"kata12":[
{"correctAnswer":"ネコガイマス","question":"How do you say 'I have a cat' in katakana?"},
{"correctAnswer":"サクラノハナガ","question":"What is the following sound in katakana: sakura no hana ga"},
{"correctAnswer":"オハヨー","question":"What is the following sound in katakana: ohayoo"},
{"correctAnswer":"オハヨーゴザイマス","question":"Good morning in Japanese is..."},
{"correctAnswer":"シツレーシマス","question":"What is the following sound in katakana: shitsure-shimasu"},
{"correctAnswer":"アリガトー","question":"Express your gratitude in katakana."},
{"correctAnswer":"タベマシタ","question":"What is the following sound in katakana: tabemashita"},
{"correctAnswer":"ゲンキデスカ","question":"In katakana, how would you ask 'How are you?'"},
{"correctAnswer":"ココデス","question":"What is the following sound in katakana: kokodesu"},
{"correctAnswer":"ワタシノナマエワジョンデス","question":"Translate 'My name is John' in katakana."},
{"correctAnswer":"アリガトーゴザイマス","question":"What is the following sound in katakana: arigatoo gozaimasu"},
{"correctAnswer":"コレワホンデス","question":"How would you say 'This is a book' in katakana?"},
{"correctAnswer":"オナマエワナンデスカ","question":"What is the following sound in katakana: onamae wa nan desu ka"},
{"correctAnswer":"ニホンゴガムズカシイデス","question":"Express 'Japanese is difficult' in katakana."},
{"correctAnswer":"コレワペンデス","question":"What is the following sound in katakana: kore wa pen desu"},
{"correctAnswer":"キョーワドヨービデス","question":"Today is Saturday. Say it in katakana."},
{"correctAnswer":"ワタシワガクセーデス","question":"What is the following sound in katakana: watashi wa gakusee desu"},
{"correctAnswer":"サクラノハナガサイテイマス","question":"Translate 'The cherry blossoms are blooming' to katakana."},
{"correctAnswer":"アノヒトハセーキュウデス","question":"What is the following sound in katakana: ano hito wa seekyu desu"},
{"correctAnswer":"トーキョーニイキマシタ","question":"Say 'I went to Tokyo' in katakana."},
{"correctAnswer":"ゴミヲステマシタ","question":"What is the following sound in katakana: gomi wo sutemashita"},
{"correctAnswer":"アノショーネンワカシコイデス","question":"How would you say 'That boy is smart' in katakana?"},
{"correctAnswer":"スキーガスキデス","question":"What is the following sound in katakana: sukii ga suki desu"},
{"correctAnswer":"キノーアメガフリマシタ","question":"It rained yesterday. Express this in katakana."},
{"correctAnswer":"カイモノニイキマシタ","question":"What is the following sound in katakana: kaimono ni ikimashita"},
{"correctAnswer":"アシタワテンキガイイソウデス","question":"Translate 'Tomorrow the weather seems good' to katakana."},
{"correctAnswer":"ソノホンワタカイデスネ","question":"What is the following sound in katakana: sono hon wa takai desu ne"},
{"correctAnswer":"ワタシノクルマワアカイデス","question":"My car is red. Say this in katakana."},
{"correctAnswer":"アシタアメガフルカモシレマセン","question":"What is the following sound in katakana: ashita ame ga furu kamoshiremasen"},
{"correctAnswer":"カレワエイゴガジョーズデス","question":"He is good at English. Katakana, please."},
{"correctAnswer":"コノテンワイツゴロハジマリマスカ","question":"What is the following sound in katakana: kono ten wa itsugoro hajimarimasu ka"},
{"correctAnswer":"コノリンゴワオイシイデスネ","question":"Isn't this apple delicious? Ask in katakana."},
{"correctAnswer":"サンジカンカカリマシタ","question":"What is the following sound in katakana: sanjikan kakarimashita"},
{"correctAnswer":"ワタシワゴハンヲタベマシタ","question":"I ate rice. Katakana translation?"},
{"correctAnswer":"ゴショクジャガイマシタカ","question":"What is the following sound in katakana: goshoku ja gaimashita ka"},
{"correctAnswer":"キョーワウンドーブデス","question":"It's cloudy today. Say it in katakana."},
{"correctAnswer":"タイシカンガイリマシタ","question":"What is the following sound in katakana: taishikan ga irimashita"},
{"correctAnswer":"アノヒトワガクセーデス","question":"That person is a student. Katakana, please."},
{"correctAnswer":"カノヒトハキョーネマシタ","question":"What is the following sound in katakana: kano hito wa kyoo nemashita"},
{"correctAnswer":"トmodキョーエアコンガアリマセン","question":"Unfortunately, there is no air conditioning today. Katakana?"},
{"correctAnswer":"ソノチョーシャハイツモサムイデス","question":"What is the following sound in katakana: sono choosha wa itsumo samui desu"},
{"correctAnswer":"カノジョワビョーキデス","question":"She is sick. How to say this in katakana?"},
{"correctAnswer":"ゲンゴガムズカシイデス","question":"What is the following sound in katakana: gengo ga muzukashii desu"},
{"correctAnswer":"コノホンワタカイデスネ","question":"This book is expensive, isn't it? Ask in katakana."},
{"correctAnswer":"カレハモーヤメマシタ","question":"What is the following sound in katakana: kare wa moo yamemashita"},
{"correctAnswer":"ワタシワネムリスギマシタ","question":"I overslept. Say this in katakana."},
{"correctAnswer":"カイシャワムリョクシテイマス","question":"What is the following sound in katakana: kaisha wa muryoku shite imasu"},
{"correctAnswer":"キノーデパートニイキマシタ","question":"Yesterday I went to the department store. Katakana translation?"},
{"correctAnswer":"クモリソラデシタ","question":"What is the following sound in katakana: kumori sora deshita"},
{"correctAnswer":"ソノクツワクロイデス","question":"Those shoes are black. Express this in katakana."},
{"correctAnswer":"カノショーバイテンハソコデス","question":"What is the following sound in katakana: kano shoobaiten wa soko desu"},
{"correctAnswer":"アメガフッテイマス","question":"It's raining. How to say this in katakana?"},
{"correctAnswer":"ヤマダサンワニホンゴガジョーズデス","question":"What is the following sound in katakana: yamada san wa nihongo ga joozu desu"},
{"correctAnswer":"カレワベンキョーシマシタ","question":"He studied. Katakana translation, please."},
{"correctAnswer":"キノーワタクサンヒコーキニノリマシタ","question":"What is the following sound in katakana: kinoo watakushi wa takusan hikooki ni norimashita"},
{"correctAnswer":"コノソバワマズイデスネ","question":"This soba noodle dish is not tasty, is it? Ask in katakana."},
{"correctAnswer":"ミセデカオウトシワサガシニクイマシタ","question":"What is the following sound in katakana: mise de kaori to shiwa sagashi ni kuimashita"},
{"correctAnswer":"キノーワタシニホンゴノテストガアリマシタ","question":"I had a Japanese test yesterday. Say this in katakana."},
{"correctAnswer":"ココロガユレテイマス","question":"What is the following sound in katakana: kokoro ga yurete imasu"},
{"correctAnswer":"カノヒトワデパートデハタライテイマス","question":"That person works at a department store. Katakana translation?"},
{"correctAnswer":"ギンコーデオカネヲトリダシマシタ","question":"What is the following sound in katakana: ginkou de okane wo toridashimashita"},
{"correctAnswer":"ワタシノクルマワフルイデス","question":"My car is old. Express this in katakana."},
{"correctAnswer":"クウコーデボーイングノヒコーキヲミマシタ","question":"What is the following sound in katakana: kuukou de booingu no hikooki wo mimashita"},
{"correctAnswer":"キョネンリンゴガオオクデキマシタ","question":"Many apples were harvested last year. Katakana, please."},
{"correctAnswer":"アイテハチョーデキレイデシタ","question":"What is the following sound in katakana: aite wa choodekireii deshita"},
{"correctAnswer":"テがみヲカキマシタ","question":"I wrote a letter. How to say this in katakana?"},
{"correctAnswer":"コノサーバーワゴーイングシテイマス","question":"What is the following sound in katakana: kono saabaa wa gooingu shite imasu"},
{"correctAnswer":"ホンヲヨミマシタカ","question":"Did you read a book? Ask in katakana."},
{"correctAnswer":"ユッカナヨウデスガジツワムズカシイデス","question":"What is the following sound in katakana: yukkana you desu ga jitsu wa muzukashii desu"},
{"correctAnswer":"キノートーキョーデパーティーガアリマシタ","question":"There was a party in Tokyo last Saturday night. Katakana?"},
{"correctAnswer":"コノバッカリーワオニューデス","question":"What is the following sound in katakana: kono bakkariii wa oniuu desu"},
{"correctAnswer":"コレワワタシノカバンデス","question":"This is my bag. Say it in katakana."},
{"correctAnswer":"アリガトーゴザイマシタ","question":"What is the following sound in katakana: arigatoo gozaimashita"},
{"correctAnswer":"カノヒトワカラダガヨワッテイマス","question":"That person has a weak body. Express this in katakana."},
{"correctAnswer":"キョーワタクサンナニモデキマセンデシタ","question":"What is the following sound in katakana: kyoo watakushi wa takusan nani mo dekimasen deshita"},
{"correctAnswer":"ソノスポーツカラニュウショヲモラッタデショウカ","question":"Did you receive any prizes from that sport? Ask in katakana."},
{"correctAnswer":"パーフェクトデワアリマセン","question":"What is the following sound in katakana: paafekuto de wa arimasen"},
{"correctAnswer":"カレワモーヤメマシタ","question":"He has already quit. Katakana translation?"},
{"correctAnswer":"ワタクシノチュウゴクリョコーワソレホドヨクアリマセン","question":"What is the following sound in katakana: watakushi no chuugokugoryokoo wa sorehodo yokuarimasen"},
    ],

"kata22":[
{"correctAnswer":"セーターガニガテデス","question":"The sweater doesn't fit me well. How to say this in katakana?"},
{"correctAnswer":"カノオペレーターワショーヒンガキンジョデス","question":"What is the following sound in katakana: kano opereetaa wa shoohin ga kinjodesu"},
{"correctAnswer":"クウコーデヒコーキガトンデイマス","question":"A plane is taking off at the airport. Express in katakana."},
{"correctAnswer":"カレワマダヤクシテイマセン","question":"What is the following sound in katakana: kare wa mada yakushite imasen"},
{"correctAnswer":"ゲンキナコドモバカリデシタ","question":"They were all energetic children. Katakana, please."},
{"correctAnswer":"ワタクシワネムリスギテイマスネ","question":"What is the following sound in katakana: watakushi wa nemurisugite imasune"},
{"correctAnswer":"コノチョコレートワアマクテオイシイデス","question":"This chocolate is sweet and delicious. Say it in katakana."},
{"correctAnswer":"アノコドモワモーオナカガスイテイマス","question":"What is the following sound in katakana: ano kodomo wa moo onaka ga suite imasu"},
{"correctAnswer":"センシャワキレイナエデシタ","question":"The sashimi platter looked beautiful. How to express in katakana?"},
{"correctAnswer":"アレハキノウニカイタデスネ","question":"What is the following sound in katakana: are wa kinouni kaitadesu ne"},
{"correctAnswer":"アノバイオリニストワスゴクジョーズデシタ","question":"That violinist was truly excellent. Katakana translation?"},
{"correctAnswer":"ソノイナカノヒトハナンデスカ","question":"What is the following sound in katakana: sono inakanohito wa nan desu ka"},
{"correctAnswer":"カレワソノサクヒンニテンサイシナケレバナリマセンデシタ","question":"He could not help but admire that masterpiece. Say it in katakana."},
{"correctAnswer":"コノケーキガオイシイソーデス","question":"What is the following sound in katakana: kono keekii ga oishii soo desu"},
{"correctAnswer":"コノケーキワヨクアマクテオイシクアリマセン","question":"This cake is not very sweet and not very delicious. Katakana?"},
{"correctAnswer":"マスターワシキニトキドキモドリマス","question":"What is the following sound in katakana: masutaa wa shikini tokidoki modori masu"},
{"correctAnswer":"ワタクシノセイトワムリョクシテイマス","question":"My company is going bankrupt. Express this in katakana."},
{"correctAnswer":"クチビルガカワイタ","question":"What is the following sound in katakana: kuchibiru ga kawaita"},
{"correctAnswer":"ノドガカワイテイルノデココアオノミマシタ","question":"What is the following sound in katakana: nodo ga kawaite iru node kokoa o nomimashita"},
{"correctAnswer":"マエジューガタオレマシタ","question":"What is the following sound in katakana: mae juu ga taoremashita"},
{"correctAnswer":"キョウワマゴツエンドイットゾン","question":"What is the following sound in katakana: kyou wa magotsuendoittozons"},
{"correctAnswer":"モウスコシマッテクダサイ","question":"What is the following sound in katakana: mou sukoshi matte kudasai"},
{"correctAnswer":"パーフェクトナノカ","question":"What is the following sound in katakana: paafekuto na no ka"},
{"correctAnswer":"ラーメンヲタベルデショウカ","question":"What is the following sound in katakana: raamen wo taberu deshoo ka"},
{"correctAnswer": "ジャンパーがにぎやかです", "question": "The jumper is colorful. How to express this in katakana?" },
{"correctAnswer": "アレはとてもふるいえです", "question": "What is the following sound in katakana: are wa totemo furui e desu" },
{"correctAnswer": "コンビニにいきましょうか", "question": "Shall we go to the convenience store? Express in katakana." },
{"correctAnswer": "ジュースはからいです", "question": "The juice is spicy. How to say this in katakana?" },
{"correctAnswer": "オフィスではたらきます", "question": "I work in the office. Translate into katakana." },
{"correctAnswer": "カレンダーがひつようですか", "question": "Do you need a calendar? How to express in katakana?" },
{ "correctAnswer": "トイレはどこですか", "question": "Where is the toilet? Translate into katakana." },
{ "correctAnswer": "サッカーがすきです", "question": "I like soccer. How to say this in katakana?" },
{ "correctAnswer": "ケーキはあまいです", "question": "The cake is sweet. How to express in katakana?" },
{ "correctAnswer": "バナナはおいしいです", "question": "Bananas are delicious. Translate into katakana." },
{ "correctAnswer": "ホテルのいるばしょがしっていますか", "question": "Do you know the location of the hotel? Express in katakana." },
{ "correctAnswer": "ソファーがくるしいです", "question": "The sofa is uncomfortable. How to say this in katakana?" },
{ "correctAnswer": "エレベーターでいきましょう", "question": "Let's take the elevator. Translate into katakana." },
{ "correctAnswer": "ファイルはだいじょうぶです", "question": "The file is okay. How to express in katakana?" },
{ "correctAnswer": "フルーツがおいしいです", "question": "The fruits are delicious. Translate into katakana." },
{ "correctAnswer": "デパートでかいものをしましょうか", "question": "Shall we shop at the department store? Express in katakana." },
{ "correctAnswer": "カメラがぶしょうねんのプレゼントです", "question": "The camera is a present for the boy. How to say this in katakana?" },
{ "correctAnswer": "エアコンがこわれました", "question": "The air conditioner broke. Translate into katakana." },
{ "correctAnswer": "レストランでたべましょう", "question": "Let's eat at the restaurant. How to express in katakana?" },
{ "correctAnswer": "パソコンをもっていますか", "question": "Do you have a computer? Translate into katakana." },
{ "correctAnswer": "テレビがあかりません", "question": "The TV won't turn on. How to say this in katakana?" }
],

  "khan03": [
  { "correctAnswer": "一", "question": "Write the following kanji character: one" },
  { "correctAnswer": "二", "question": "Write the following kanji character: two" },
  { "correctAnswer": "三", "question": "Write the following kanji character: three" },
  { "correctAnswer": "四", "question": "Write the following kanji character: four" },
  { "correctAnswer": "五", "question": "Write the following kanji character: five" },
  { "correctAnswer": "六", "question": "Write the following kanji character: six" },
  { "correctAnswer": "七", "question": "Write the following kanji character: seven" },
  { "correctAnswer": "八", "question": "Write the following kanji character: eight" },
  { "correctAnswer": "九", "question": "Write the following kanji character: nine" },
  { "correctAnswer": "十", "question": "Write the following kanji character: ten" },
  { "correctAnswer": "百", "question": "Write the following kanji character: hundred" },
  { "correctAnswer": "千", "question": "Write the following kanji character: thousand" },
  { "correctAnswer": "万", "question": "Write the following kanji character: ten thousand" },
  { "correctAnswer": "円", "question": "Write the following kanji character: yen" },
  { "correctAnswer": "日", "question": "Write the following kanji character: day" },
  { "correctAnswer": "月", "question": "Write the following kanji character: month" },
  { "correctAnswer": "火", "question": "Write the following kanji character: fire" },
  { "correctAnswer": "水", "question": "Write the following kanji character: water" },
  { "correctAnswer": "木", "question": "Write the following kanji character: tree" },
  { "correctAnswer": "金", "question": "Write the following kanji character: gold" },
  { "correctAnswer": "土", "question": "Write the following kanji character: soil" },
  { "correctAnswer": "空", "question": "Write the following kanji character: sky" },
  { "correctAnswer": "風", "question": "Write the following kanji character: wind" },
  { "correctAnswer": "雨", "question": "Write the following kanji character: rain" },
  { "correctAnswer": "雪", "question": "Write the following kanji character: snow" },
  { "correctAnswer": "花", "question": "Write the following kanji character: flower" },
  { "correctAnswer": "山", "question": "Write the following kanji character: mountain" },
  { "correctAnswer": "川", "question": "Write the following kanji character: river" },
  { "correctAnswer": "海", "question": "Write the following kanji character: sea" },
  { "correctAnswer": "人", "question": "Write the following kanji character: person" },
  { "correctAnswer": "名", "question": "Write the following kanji character: name" },
  { "correctAnswer": "男", "question": "Write the following kanji character: man" },
  { "correctAnswer": "女", "question": "Write the following kanji character: woman" },
  { "correctAnswer": "子", "question": "Write the following kanji character: child" },
  { "correctAnswer": "学", "question": "Write the following kanji character: study" },
  { "correctAnswer": "校", "question": "Write the following kanji character: school" },
  { "correctAnswer": "先", "question": "Write the following kanji character: ahead" },
  { "correctAnswer": "生", "question": "Write the following kanji character: life" },
  { "correctAnswer": "年", "question": "Write the following kanji character: year" },
  { "correctAnswer": "間", "question": "Write the following kanji character: space" },
  { "correctAnswer": "時", "question": "Write the following kanji character: time" },
  { "correctAnswer": "今", "question": "Write the following kanji character: now" },
  { "correctAnswer": "午", "question": "Write the following kanji character: noon" },
  { "correctAnswer": "後", "question": "Write the following kanji character: behind" },
  { "correctAnswer": "前", "question": "Write the following kanji character: front" },
  { "correctAnswer": "中", "question": "Write the following kanji character: inside" },
  { "correctAnswer": "外", "question": "Write the following kanji character: outside" },
  { "correctAnswer": "上", "question": "Write the following kanji character: up" },
  { "correctAnswer": "下", "question": "Write the following kanji character: down" },
  { "correctAnswer": "左", "question": "Write the following kanji character: left" },
  { "correctAnswer": "右", "question": "Write the following kanji character: right" },
  { "correctAnswer": "手", "question": "Write the following kanji character: hand" },
  { "correctAnswer": "足", "question": "Write the following kanji character: leg" },
  { "correctAnswer": "目", "question": "Write the following kanji character: eye" },
  { "correctAnswer": "口", "question": "Write the following kanji character: mouth" },
  { "correctAnswer": "耳", "question": "Write the following kanji character: ear" },
  { "correctAnswer": "鼻", "question": "Write the following kanji character: nose" },
  { "correctAnswer": "口", "question": "Write the following kanji character: mouth" },
  { "correctAnswer": "手紙", "question": "Write the following kanji characters: letter" },
  { "correctAnswer": "本", "question": "Write the following kanji character: book" },
  { "correctAnswer": "語", "question": "Write the following kanji character: language" },
  { "correctAnswer": "話", "question": "Write the following kanji character: talk" },
  { "correctAnswer": "食", "question": "Write the following kanji character: eat" },
  { "correctAnswer": "飲", "question": "Write the following kanji character: drink" },
  { "correctAnswer": "寝", "question": "Write the following kanji character: sleep" },
  { "correctAnswer": "起", "question": "Write the following kanji character: wake up" },
  { "correctAnswer": "出", "question": "Write the following kanji character: exit" },
  { "correctAnswer": "入", "question": "Write the following kanji character: enter" },
  { "correctAnswer": "見", "question": "Write the following kanji character: see" },
  { "correctAnswer": "聞", "question": "Write the following kanji character: hear" },
  { "correctAnswer": "知", "question": "Write the following kanji character: know" },
  { "correctAnswer": "書", "question": "Write the following kanji character: write" },
  { "correctAnswer": "読", "question": "Write the following kanji character: read" },
  { "correctAnswer": "行", "question": "Write the following kanji character: go" },
  { "correctAnswer": "来", "question": "Write the following kanji character: come" },
  { "correctAnswer": "帰", "question": "Write the following kanji character: return" },
  { "correctAnswer": "買", "question": "Write the following kanji character: buy" },
  { "correctAnswer": "売", "question": "Write the following kanji character: sell" },
  { "correctAnswer": "待", "question": "Write the following kanji character: wait" },
  { "correctAnswer": "遊", "question": "Write the following kanji character: play" },
  { "correctAnswer": "歩", "question": "Write the following kanji character: walk" },
  { "correctAnswer": "走", "question": "Write the following kanji character: run" },
  { "correctAnswer": "泳", "question": "Write the following kanji character: swim" },
  { "correctAnswer": "飛", "question": "Write the following kanji character: fly" },
  { "correctAnswer": "跳", "question": "Write the following kanji character: jump" },
  { "correctAnswer": "運", "question": "Write the following kanji character: luck" },
  { "correctAnswer": "勉", "question": "Write the following kanji character: study" },
  { "correctAnswer": "強", "question": "Write the following kanji character: strong" },
  { "correctAnswer": "弱", "question": "Write the following kanji character: weak" },
  { "correctAnswer": "高", "question": "Write the following kanji character: high" },
  { "correctAnswer": "低", "question": "Write the following kanji character: low" },
  { "correctAnswer": "広", "question": "Write the following kanji character: wide" },
  { "correctAnswer": "狭", "question": "Write the following kanji character: narrow" },
  { "correctAnswer": "長", "question": "Write the following kanji character: long" },
  { "correctAnswer": "短", "question": "Write the following kanji character: short" },
  { "correctAnswer": "新", "question": "Write the following kanji character: new" },
  { "correctAnswer": "古", "question": "Write the following kanji character: old" },
  { "correctAnswer": "多", "question": "Write the following kanji character: many" },
  { "correctAnswer": "少", "question": "Write the following kanji character: few" },
  { "correctAnswer": "早", "question": "Write the following kanji character: early" },
  { "correctAnswer": "遅", "question": "Write the following kanji character: late" },
  { "correctAnswer": "暑", "question": "Write the following kanji character: hot" },
  { "correctAnswer": "寒", "question": "Write the following kanji character: cold" },
  { "correctAnswer": "暖", "question": "Write the following kanji character: warm" },
  { "correctAnswer": "冷", "question": "Write the following kanji character: cool" },
  { "correctAnswer": "上手", "question": "Write the following kanji characters: skilled" },
  { "correctAnswer": "下手", "question": "Write the following kanji characters: unskilled" },
  { "correctAnswer": "大", "question": "Write the following kanji character: big" },
  { "correctAnswer": "小", "question": "Write the following kanji character: small" },
  { "correctAnswer": "好", "question": "Write the following kanji character: good" },
  { "correctAnswer": "悪", "question": "Write the following kanji character: bad" },
  { "correctAnswer": "美", "question": "Write the following kanji character: beautiful" },
  { "correctAnswer": "醜", "question": "Write the following kanji character: ugly" },
  { "correctAnswer": "高い", "question": "Write the following kanji characters: expensive" },
  { "correctAnswer": "安い", "question": "Write the following kanji characters: cheap" },
  { "correctAnswer": "忙しい", "question": "Write the following kanji characters: busy" },
  { "correctAnswer": "暇", "question": "Write the following kanji character: free" },
  { "correctAnswer": "嬉しい", "question": "Write the following kanji characters: happy" },
  { "correctAnswer": "悲しい", "question": "Write the following kanji characters: sad" },
  { "correctAnswer": "面白い", "question": "Write the following kanji characters: interesting" },
  { "correctAnswer": "退屈", "question": "Write the following kanji characters: boring" },
  { "correctAnswer": "難しい", "question": "Write the following kanji characters: difficult" },
  { "correctAnswer": "簡単", "question": "Write the following kanji characters: easy" },
  { "correctAnswer": "健康", "question": "Write the following kanji characters: health" },
  { "correctAnswer": "病気", "question": "Write the following kanji characters: sickness" },
  { "correctAnswer": "快適", "question": "Write the following kanji characters: comfortable" },
  { "correctAnswer": "不快", "question": "Write the following kanji characters: uncomfortable" },
  { "correctAnswer": "元気", "question": "Write the following kanji characters: energetic" },
  { "correctAnswer": "疲れた", "question": "Write the following kanji characters: tired" },
  { "correctAnswer": "良い", "question": "Write the following kanji characters: good" },
  { "correctAnswer": "悪い", "question": "Write the following kanji characters: bad" },
  { "correctAnswer": "大好き", "question": "Write the following kanji characters: love" },
  { "correctAnswer": "嫌い", "question": "Write the following kanji characters: hate" },
  { "correctAnswer": "笑顔", "question": "Write the following kanji characters: smile" },
  { "correctAnswer": "涙", "question": "Write the following kanji character: tears" },
  { "correctAnswer": "怒り", "question": "Write the following kanji character: anger" },
  { "correctAnswer": "喜び", "question": "Write the following kanji character: joy" }
  ],

"khan13": [
{"question":"Write the kanji for 'one'.","correctAnswer":"一"},
{"question":"Write the kanji for 'two'.","correctAnswer":"二"},
{"question":"Write the kanji for 'three'.","correctAnswer":"三"},
{"question":"Write the kanji for 'four'.","correctAnswer":"四"},
{"question":"Write the kanji for 'five'.","correctAnswer":"五"},
{"question":"Write the kanji for 'six'.","correctAnswer":"六"},
{"question":"Write the kanji for 'seven'.","correctAnswer":"七"},
{"question":"Write the kanji for 'eight'.","correctAnswer":"八"},
{"question":"Write the kanji for 'nine'.","correctAnswer":"九"},
{"question":"Write the kanji for 'ten'.","correctAnswer":"十"},
{"question":"Write the kanji for 'book'.","correctAnswer":"本"},
{"question":"Write the kanji for 'mountain'.","correctAnswer":"山"},
{"question":"Write the kanji for 'river'.","correctAnswer":"川"},
{"question":"Write the kanji for 'tree'.","correctAnswer":"木"},
{"question":"Write the kanji for 'person'.","correctAnswer":"人"},
{"question":"Write the kanji for 'love'.","correctAnswer":"愛"},
{"question":"Write the kanji for 'study'.","correctAnswer":"勉強"},
{"question":"Write the kanji for 'Japan'.","correctAnswer":"日本"},
{"question":"Write the kanji for 'Tokyo'.","correctAnswer":"東京"},
{"question":"Write the kanji for 'family'.","correctAnswer":"家族"},
{"question":"Write the kanji for 'friend'.","correctAnswer":"友達"},
{"question":"Write the kanji for 'school'.","correctAnswer":"学校"},
{"question":"Write the kanji for 'restaurant'.","correctAnswer":"レストラン"},
{"question":"Write the kanji for 'teacher'.","correctAnswer":"先生"},
{"question":"Write the kanji for 'student'.","correctAnswer":"生徒"},
{"question":"Write the kanji for 'peace'.","correctAnswer":"平和"},
{"question":"Write the kanji for 'tomorrow'.","correctAnswer":"明日"},
{"question":"Write the kanji for 'yesterday'.","correctAnswer":"昨日"},
{"question":"Write the kanji for 'month'.","correctAnswer":"月"},
{"question":"Write the kanji for 'year'.","correctAnswer":"年"},
{"question":"Write the kanji for 'day'.","correctAnswer":"日"},
{"question":"Write the kanji for 'morning'.","correctAnswer":"朝"},
{"question":"Write the kanji for 'evening'.","correctAnswer":"夜"},
{"question":"Write the kanji for 'spring'.","correctAnswer":"春"},
{"question":"Write the kanji for 'summer'.","correctAnswer":"夏"},
{"question":"Write the kanji for 'fall'.","correctAnswer":"秋"},
{"question":"Write the kanji for 'winter'.","correctAnswer":"冬"},
{"question":"Write the kanji for 'father'.","correctAnswer":"父"},
{"question":"Write the kanji for 'mother'.","correctAnswer":"母"},
{"question":"Write the kanji for 'older brother'.","correctAnswer":"兄"},
{"question":"Write the kanji for 'younger brother'.","correctAnswer":"弟"},
{"question":"Write the kanji for 'older sister'.","correctAnswer":"姉"},
{"question":"Write the kanji for 'younger sister'.","correctAnswer":"妹"},
{"question":"Write the kanji for 'husband'.","correctAnswer":"夫"},
{"question":"Write the kanji for 'wife'.","correctAnswer":"妻"},
{"question":"Write the kanji for 'child'.","correctAnswer":"子"},
{"question":"Write the kanji for 'sun'.","correctAnswer":"日"},
{"question":"Write the kanji for 'moon'.","correctAnswer":"月"},
{"question":"Write the kanji for 'star'.","correctAnswer":"星"},
{"question":"Write the kanji for 'rain'.","correctAnswer":"雨"},
{"question":"Write the kanji for 'snow'.","correctAnswer":"雪"},
{"question":"Write the kanji for 'wind'.","correctAnswer":"風"},
{"question":"Write the kanji for 'fire'.","correctAnswer":"火"},
{"question":"Write the kanji for 'water'.","correctAnswer":"水"},
{"question":"Write the kanji for 'earth'.","correctAnswer":"土"},
{"question":"Write the kanji for 'dog'.","correctAnswer":"犬"},
{"question":"Write the kanji for 'cat'.","correctAnswer":"猫"},
{"question":"Write the kanji for 'bird'.","correctAnswer":"鳥"},
{"question":"Write the kanji for 'fish'.","correctAnswer":"魚"},
{"question":"Write the kanji for 'flower'.","correctAnswer":"花"},
{"question":"Write the kanji for 'rice'.","correctAnswer":"米"},
{"question":"Write the kanji for 'bread'.","correctAnswer":"パン"},
{"question":"Write the kanji for 'soup'.","correctAnswer":"スープ"},
{"question":"Write the kanji for 'tea'.","correctAnswer":"茶"},
{"question":"Write the kanji for 'coffee'.","correctAnswer":"コーヒー"},
{"question":"Write the kanji for 'sake'.","correctAnswer":"酒"},
{"question":"Write the kanji for 'music'.","correctAnswer":"音楽"},
{"question":"Write the kanji for 'art'.","correctAnswer":"芸術"},
{"question":"Write the kanji for 'sports'.","correctAnswer":"スポーツ"},
{"question":"Write the kanji for 'game'.","correctAnswer":"ゲーム"},
{"question":"Write the kanji for 'movie'.","correctAnswer":"映画"},
{"question":"Write the kanji for 'television'.","correctAnswer":"テレビ"},
{"question":"Write the kanji for 'computer'.","correctAnswer":"コンピューター"},
{"question":"Write the kanji for 'telephone'.","correctAnswer":"電話"},
{"question":"Write the kanji for 'car'.","correctAnswer":"車"},
{"question":"Write the kanji for 'train'.","correctAnswer":"電車"},
{"question":"Write the kanji for 'airplane'.","correctAnswer":"飛行機"},
{"question":"Write the kanji for 'red'.","correctAnswer":"赤"},
{"question":"Write the kanji for 'blue'.","correctAnswer":"青"},
{"question":"Write the kanji for 'yellow'.","correctAnswer":"黄"},
{"question":"Write the kanji for 'green'.","correctAnswer":"緑"},
{"question":"Write the kanji for 'white'.","correctAnswer":"白"},
{"question":"Write the kanji for 'black'.","correctAnswer":"黒"},
{"question":"Write the kanji for 'big'.","correctAnswer":"大"},
{"question":"Write the kanji for 'small'.","correctAnswer":"小"},
{"question":"Write the kanji for 'long'.","correctAnswer":"長"},
{"question":"Write the kanji for 'short'.","correctAnswer":"短"},
{"question":"Write the kanji for 'new'.","correctAnswer":"新"},
{"question":"Write the kanji for 'old'.","correctAnswer":"古"},
{"question":"Write the kanji for 'good'.","correctAnswer":"良い"},
{"question":"Write the kanji for 'bad'.","correctAnswer":"悪い"},
{"question":"Write the kanji for 'beautiful'.","correctAnswer":"美しい"},
{"question":"Write the kanji for 'ugly'.","correctAnswer":"醜い"},
{"question":"Write the kanji for 'hot'.","correctAnswer":"熱い"},
{"question":"Write the kanji for 'cold'.","correctAnswer":"寒い"},
{"question":"Write the kanji for 'happy'.","correctAnswer":"幸せ"},
{"question":"Write the kanji for 'sad'.","correctAnswer":"悲しい"},
{"question":"Write the kanji for 'angry'.","correctAnswer":"怒る"},
{"question":"Write the kanji for 'afraid'.","correctAnswer":"怖い"},
{"question":"Write the kanji for 'hungry'.","correctAnswer":"空腹"},
{"question":"Write the kanji for 'thirsty'.","correctAnswer":"渇き"},
{"question":"Write the kanji for 'healthy'.","correctAnswer":"健康"},
{"question":"Write the kanji for 'sick'.","correctAnswer":"病気"},
{"question":"Write the kanji for 'rich'.","correctAnswer":"金持ち"},
{"question":"Write the kanji for 'poor'.","correctAnswer":"貧しい"},
{"question":"Write the kanji for 'strong'.","correctAnswer":"強い"},
{"question":"Write the kanji for 'weak'.","correctAnswer":"弱い"}
    ],

"voc01": [
 {
   "question": "ride, get on [a train]",
   "correctAnswer": "のります"
 },
 {
   "question": "get off [a train]", 
   "correctAnswer": "おります"
 },
 {
   "question": "change (train etc..)",
   "correctAnswer": "かえります"
 },
 {
   "question": "take [a shower]",
   "correctAnswer": "シャワーをあびます"
 },
 {
   "question": "put in, insert",
   "correctAnswer": "いれます"
 },
 {
   "question": "take out, hand in, send",
   "correctAnswer": "だします"
 },
 {
   "question": "withdraw",
   "correctAnswer": "おろします"
 },
 {
   "question": "enter [university]",
   "correctAnswer": "はいります"
 },
 {
   "question": "graduate from [university]",
   "correctAnswer": "そつぎょうします"
 },
 {
   "question": "push, press",
   "correctAnswer": "おします"
 },
 {
   "question": "drink alcohol",
   "correctAnswer": "のみます"
 },
 {
   "question": "start, begin",
   "correctAnswer": "はじめます"
 },
 {
   "question": "tour, visit a place to study in",
   "correctAnswer": "りょこうします"
 },
 {
   "question": "phone",
   "correctAnswer": "でんわします"
 },
 {
   "question": "long",
   "correctAnswer": "ながいです"
 },
 {
   "question": "young",
   "correctAnswer": "わかいです"
 },
 {
   "question": "short",
   "correctAnswer": "みじかいです"
 },
 {
   "question": "bright/light",
   "correctAnswer": "あかるいです"
 },
 {
   "question": "dark",
   "correctAnswer": "くらいです"
 },
 {
   "question": "body, health",
   "correctAnswer": "からだです"
 },
 {
   "question": "head, brain",
   "correctAnswer": "あたまです"
 },
 {
   "question": "hair",
   "correctAnswer": "かみです"
 },
 {
   "question": "face",
   "correctAnswer": "かおです"
 },
 {
   "question": "eye",
   "correctAnswer": "めです"
 },
 {
   "question": "ear",
   "correctAnswer": "みみです"
 },
 {
   "question": "nose",
   "correctAnswer": "はなです"
 },
 {
   "question": "mouth",
   "correctAnswer": "くちです"
 },
 {
   "question": "tooth",
   "correctAnswer": "はです"
 },
 {
   "question": "breast",
   "correctAnswer": "おっぱいです"
 },
 {
   "question": "stomach",
   "correctAnswer": "おなかです"
 },
 {
   "question": "penis",
   "correctAnswer": "ちんちんです"
 },
 {
   "question": "vagina",
   "correctAnswer": "まんこです"
 },
 {
   "question": "leg, foot",
   "correctAnswer": "あしです"
 },
 {
   "question": "height",
   "correctAnswer": "たかさです"
 },
 {
   "question": "service",
   "correctAnswer": "さーびすします"
 },
 {
   "question": "jogging",
   "correctAnswer": "じょぎんぐします"
 },
 {
   "question": "shower",
   "correctAnswer": "シャワーをあびます"
 },
 {
   "question": "green",
   "correctAnswer": "みどりです"
 },
 {
   "question": "greenery",
   "correctAnswer": "りょくちです"
 },
 {
   "question": "Buddhist temple",
   "correctAnswer": "てらです"
 },
 {
   "question": "Shinto shrine",
   "correctAnswer": "じんじゃです"
 },
 {
   "question": "number",
   "correctAnswer": "かずです"
 },
 {
   "question": "in what way, how",
   "correctAnswer": "どのようにです"
 },
 {
   "question": "which ~ (used for three or more)",
   "correctAnswer": "どれらですか"
 },
 {
   "question": "which one (of three or more things)",
   "correctAnswer": "どれですか"
 },
 {
   "question": "That's amazing!",
   "correctAnswer": "すごいですね"
 },
 {
   "question": "[No,] I still have long way to go",
   "correctAnswer": "まだまだですね"
 },
 {
   "question": "Are you making a withdrawal?",
   "correctAnswer": "おろしていますか"
 },
 {
   "question": "first of all",
   "correctAnswer": "まず"
 },
 {
   "question": "next, as a next step",
   "correctAnswer": "つぎに"
 },
 {
   "question": "cash dispensing card",
   "correctAnswer": "ATMカードです"
 },
 {
   "question": "personal identification number, PIN",
   "correctAnswer": "PINです"
 },
 {
   "question": "amount of money",
   "correctAnswer": "きんがくです"
 },
 {
   "question": "confirmation (confirm)",
   "correctAnswer": "かくにんします"
 },
 {
   "question": "button",
   "correctAnswer": "ぼたんです"
 }
    ],

"num01":[
    {"question":"Write the japanese for 'one'.","correctAnswer":"一"},
    {"question":"Write the japanese for 'thirty'.","correctAnswer":"三十 "},
    {"question":"Write the japanese for 'eighty'.","correctAnswer":"八十"},
    {"question":"Write the japanese for 'ten'.","correctAnswer":"十"},
    {"question":"Write the japanese for 'fifty'.","correctAnswer":"五十"},
    {"question":"Write the japanese for 'three hundred'.","correctAnswer":"三百"},
    {"question":"Write the japanese for 'five hundred'.","correctAnswer":"五百"},
    {"question":"Write the japanese for 'one thousand'.","correctAnswer":"千"},
    {"question":"Write the japanese for 'three thousand'.","correctAnswer":"三千"},
    {"question":"Write the japanese for 'ten thousand'.","correctAnswer":"一万"},
    {"question":"Write the japanese for 'fifty thousand'.","correctAnswer":"五万"},
    {"question":"Write the japanese for 'one hundred thousand'.","correctAnswer":"十万"},
    {"question":"Write the japanese for 'three hundred thousand'.","correctAnswer":"三百万"},
    {"question":"Write the japanese for 'five hundred thousand'.","correctAnswer":"五百万"},
    {"question":"Write the japanese for 'one million'.","correctAnswer":"百万"},
    {"question":"Write the japanese for 'three million'.","correctAnswer":"三百万"},
    {"question":"Write the japanese for 'five million'.","correctAnswer":"五百万"},
    {"question":"Write the japanese for 'ten million'.","correctAnswer":"千万"},
    {"question":"Write the japanese for 'fifty million'.","correctAnswer":"五千万"},
    {"question":"Write the japanese for 'one hundred million'.","correctAnswer":"一億"},
    {"question":"Write the japanese for 'three hundred million'.","correctAnswer":"三億"},
    {"question":"Write the japanese for 'two'.","correctAnswer":"二"},
    {"question":"Write the japanese for 'forty'.","correctAnswer":"四十"},
    {"question":"Write the japanese for 'sixty'.","correctAnswer":"六十"},
    {"question":"Write the japanese for 'one hundred'.","correctAnswer":"百"},
    {"question":"Write the japanese for 'seven hundred'.","correctAnswer":"七百"},
    {"question":"Write the japanese for 'nine hundred'.","correctAnswer":"九百"},
    {"question":"Write the japanese for 'two thousand five hundred'.","correctAnswer":"二千五百"},
    {"question":"Write the japanese for 'four thousand seven hundred'.","correctAnswer":"四千七百"},
    {"question":"Write the japanese for 'six thousand nine hundred'.","correctAnswer":"六千九百"},
    {"question":"Write the japanese for 'ten thousand five hundred'.","correctAnswer":"一万五百"},
    {"question":"Write the japanese for 'thirty thousand eight hundred'.","correctAnswer":"三万八百"},
    {"question":"Write the japanese for 'fifty thousand six hundred'.","correctAnswer":"五万六百"},
    {"question":"Write the japanese for 'one hundred thousand two hundred'.","correctAnswer":"十万二百"},
    {"question":"Write the japanese for 'three hundred thousand four hundred'.","correctAnswer":"三十万四百"},
    {"question":"Write the japanese for 'five hundred thousand seven hundred'.","correctAnswer":"五十万七百"},
    {"question":"Write the japanese for 'one million three hundred thousand'.","correctAnswer":"百三十万"},
    {"question":"Write the japanese for 'two million six hundred thousand'.","correctAnswer":"二百六十万"},
    {"question":"Write the japanese for 'five million four hundred thousand'.","correctAnswer":"五百四十万"},
    {"question":"Write the japanese for 'ten million eight hundred thousand'.","correctAnswer":"千八十万"},
    {"question":"Write the japanese for 'fifty million nine hundred thousand'.","correctAnswer":"五千九十万"}
    ],

"num02":[
    {"question":"Write the japanese for '134'.","correctAnswer":"百三十四"},
    {"question":"Write the japanese for '387'.","correctAnswer":"三百八十七"},
    {"question":"Write the japanese for '568'.","correctAnswer":"五百六十八"},
    {"question":"Write the japanese for '985'.","correctAnswer":"九百八十五"},
    {"question":"Write the japanese for '240'.","correctAnswer":"二百四十"},
    {"question":"Write the japanese for '776'.","correctAnswer":"七百七十六"},
    {"question":"Write the japanese for '591'.","correctAnswer":"五百九十一"},
    {"question":"Write the japanese for '834'.","correctAnswer":"八百三十四"},
    {"question":"Write the japanese for '609'.","correctAnswer":"六百九"},
    {"question":"Write the japanese for '404'.","correctAnswer":"四百四"},
    {"question":"Write the japanese for '723'.","correctAnswer":"七百二十三"},
    {"question":"Write the japanese for '867'.","correctAnswer":"八百六十七"},
    {"question":"Write the japanese for '942'.","correctAnswer":"九百四十二"},
    {"question":"Write the japanese for '559'.","correctAnswer":"五百五十九"},
    {"question":"Write the japanese for '382'.","correctAnswer":"三百八十二"},
    {"question":"Write the japanese for '614'.","correctAnswer":"六百十四"},
    {"question":"Write the japanese for '897'.","correctAnswer":"八百九十七"},
    {"question":"Write the japanese for '743'.","correctAnswer":"七百四十三"},
    {"question":"Write the japanese for '259'.","correctAnswer":"二百五十九"},
    {"question":"Write the japanese for '679'.","correctAnswer":"六百七十九"},
    {"question":"Write the japanese for '502'.","correctAnswer":"五百二"},
    {"question":"Write the japanese for '916'.","correctAnswer":"九百十六"},
    {"question":"Write the japanese for '385'.","correctAnswer":"三百八十五"},
    {"question":"Write the japanese for '527'.","correctAnswer":"五百二十七"},
    {"question":"Write the japanese for '864'.","correctAnswer":"八百六十四"},
    {"question":"Write the japanese for '728'.","correctAnswer":"七百二十八"},
    {"question":"Write the japanese for '943'.","correctAnswer":"九百四十三"},
    {"question":"Write the japanese for '605'.","correctAnswer":"六百五"},
    {"question":"Write the japanese for '372'.","correctAnswer":"三百七十二"},
    {"question":"Write the japanese for '849'.","correctAnswer":"八百四十九"},
    {"question":"Write the japanese for '736'.","correctAnswer":"七百三十六"},
    {"question":"Write the japanese for '598'.","correctAnswer":"五百九十八"},
    {"question":"Write the Japanese for '1342'.","correctAnswer":"千三百四十二"},
    {"question":"Write the Japanese for '3876'.","correctAnswer":"三千八百七十六"},
    {"question":"Write the Japanese for '5681'.","correctAnswer":"五千六百八十一"},
    {"question":"Write the Japanese for '9854'.","correctAnswer":"九千八百五十四"},
    {"question":"Write the Japanese for '2409'.","correctAnswer":"二千四百九"},
    {"question":"Write the Japanese for '7765'.","correctAnswer":"七千七百六十五"},
    {"question":"Write the Japanese for '5912'.","correctAnswer":"五千九百十二"},
    {"question":"Write the Japanese for '8347'.","correctAnswer":"八千三百四十七"},
    {"question":"Write the Japanese for '6093'.","correctAnswer":"六千九十三"},
    {"question":"Write the Japanese for '4046'.","correctAnswer":"四千四十六"},
    {"question":"Write the Japanese for '7231'.","correctAnswer":"七千二百三十一"},
    {"question":"Write the Japanese for '8675'.","correctAnswer":"八千六百七十五"},
    {"question":"Write the Japanese for '9428'.","correctAnswer":"九千四百二十八"},
    {"question":"Write the Japanese for '5590'.","correctAnswer":"五千五百九十"},
    {"question":"Write the Japanese for '3824'.","correctAnswer":"三千八百二十四"},
    {"question":"Write the Japanese for '6147'.","correctAnswer":"六千百四十七"},
    {"question":"Write the Japanese for '8973'.","correctAnswer":"八千九百七十三"},
    {"question":"Write the Japanese for '7432'.","correctAnswer":"七千四百三十二"},
    {"question":"Write the Japanese for '2591'.","correctAnswer":"二千五百九十一"},
    {"question":"Write the Japanese for '6795'.","correctAnswer":"六千七百九十五"},
    {"question":"Write the Japanese for '13427'.","correctAnswer":"一万三千四百二十七"},
    {"question":"Write the Japanese for '38765'.","correctAnswer":"三万八千七百六十五"},
    {"question":"Write the Japanese for '56812'.","correctAnswer":"五万六千八百十二"},
    {"question":"Write the Japanese for '98543'.","correctAnswer":"九万八千五百四十三"},
    {"question":"Write the Japanese for '24098'.","correctAnswer":"二万四千九十八"},
    {"question":"Write the Japanese for '77652'.","correctAnswer":"七万七千六百五十二"},
    {"question":"Write the Japanese for '59123'.","correctAnswer":"五万九千百二十三"},
    {"question":"Write the Japanese for '83470'.","correctAnswer":"八万三千四百七十"},
    {"question":"Write the Japanese for '60935'.","correctAnswer":"六万九千九十五"},
    {"question":"Write the Japanese for '40467'.","correctAnswer":"四万四百六十七"},
    {"question":"Write the Japanese for '72319'.","correctAnswer":"七万二千三百十九"},
    {"question":"Write the Japanese for '86754'.","correctAnswer":"八万六千七百五十四"},
    {"question":"Write the Japanese for '94281'.","correctAnswer":"九万四千二百八十一"},
    {"question":"Write the Japanese for '55902'.","correctAnswer":"五万五千九百二"},
    {"question":"Write the Japanese for '38245'.","correctAnswer":"三万八千二百四十五"},
    {"question":"Write the Japanese for '134276'.","correctAnswer":"十三万四千二百七十六"},
    {"question":"Write the Japanese for '387652'.","correctAnswer":"三十八万七千六百五十二"},
    {"question":"Write the Japanese for '568129'.","correctAnswer":"五十六万八千百二十九"},
    {"question":"Write the Japanese for '985430'.","correctAnswer":"九十八万五千四百三十"},
    {"question":"Write the Japanese for '240985'.","correctAnswer":"二十四万九千八百五十"},
    {"question":"Write the Japanese for '776523'.","correctAnswer":"七十七万六千五百二十三"},
    {"question":"Write the Japanese for '591237'.","correctAnswer":"五十九万千二百三十七"},
    {"question":"Write the Japanese for '834706'.","correctAnswer":"八十三万四千七百六"},
    {"question":"Write the Japanese for '609352'.","correctAnswer":"六十万九千三百五十二"},
    {"question":"Write the Japanese for '404672'.","correctAnswer":"四十万四千六百七十二"},
    {"question":"Write the Japanese for '723195'.","correctAnswer":"七十二万三千百九十五"},
    {"question":"Write the Japanese for '867544'.","correctAnswer":"八十六万七千五百四十四"},
    {"question":"Write the Japanese for '942812'.","correctAnswer":"九十四万二千八百十二"},
    {"question":"Write the Japanese for '559020'.","correctAnswer":"五十五万九千二十"},
    {"question":"Write the Japanese for '382459'.","correctAnswer":"三十八万二千四百五十九"},
    {"question":"Write the Japanese for '1342765'.","correctAnswer":"百三十四万二千七百六十五"},
    {"question":"Write the Japanese for '3876521'.","correctAnswer":"三百八十七万六千五百二十一"},
    {"question":"Write the Japanese for '5681294'.","correctAnswer":"五百六十八万千二百九十四"},
    {"question":"Write the Japanese for '9854307'.","correctAnswer":"九百八十五万四千三百七"},
    {"question":"Write the Japanese for '2409856'.","correctAnswer":"二百四十万九千八百五十六"},
    {"question":"Write the Japanese for '7765239'.","correctAnswer":"七百七十六万五千二百三十九"},
    {"question":"Write the Japanese for '5912374'.","correctAnswer":"五百九十一万二千三百七十四"},
    {"question":"Write the Japanese for '8347068'.","correctAnswer":"八百三十四万七千六百八"},
    {"question":"Write the Japanese for '6093521'.","correctAnswer":"六百九万三千五百二十一"},
    {"question":"Write the Japanese for '4046723'.","correctAnswer":"四百四万六千七百二十三"},
    {"question":"Write the Japanese for '7231954'.","correctAnswer":"七百二十三万一千九百五十四"},
    {"question":"Write the Japanese for '8675442'.","correctAnswer":"八百六十七万五千四百四十二"},
    {"question":"Write the Japanese for '9428127'.","correctAnswer":"九百四十二万八千百二十七"},
    {"question":"Write the Japanese for '5590208'.","correctAnswer":"五百五十九万二千八"},
    {"question":"Write the Japanese for '3824591'.","correctAnswer":"三百八十二万四千五百九十一"},
    {"question":"Write the Japanese for '7246358'.","correctAnswer":"七百二十四万六千三百五十八"},
    {"question":"Write the Japanese for '3298056'.","correctAnswer":"三百二十九万八千五十六"},
    {"question":"Write the Japanese for '9357120'.","correctAnswer":"九百三十五万七千百二十"},
    {"question":"Write the Japanese for '6209468'.","correctAnswer":"六百二十万九千四百六十八"},
    {"question":"Write the Japanese for '5473290'.","correctAnswer":"五百四十七万三千二百九十"},
    {"question":"Write the Japanese for '123456789'.","correctAnswer":"一億二千三百四十五万六千七百八十九"},
    {"question":"Write the Japanese for '987654321'.","correctAnswer":"九億八千七百六十五万四千三百二十一"},
    {"question":"Write the Japanese for '246801357'.","correctAnswer":"二億四千六百八十万千三百五十七"},
    {"question":"Write the Japanese for '531469872'.","correctAnswer":"五億三千百四十六万九千八百七十二"},
    {"question":"Write the Japanese for '789123456'.","correctAnswer":"七億八千九百十二万三千四百五十六"},
    {"question":"Write the Japanese for '345678912'.","correctAnswer":"三億四千五百六十七万八千九百十二"},
    {"question":"Write the Japanese for '912345678'.","correctAnswer":"九億千二百三十四万五千六百七十八"},
    {"question":"Write the Japanese for '678912345'.","correctAnswer":"六億七千八百九十一万二千三百四十五"},
    {"question":"Write the Japanese for '2345678901'.","correctAnswer":"二十三億四千五百六十七万八千九百一"},
    {"question":"Write the Japanese for '8901234567'.","correctAnswer":"八十九億千二百三十四万五千六百七十"}
    ],

"tns01": [
{"correctAnswer": "私は昨日公園を散歩しました。", "question": "I walked in the park yesterday. (Past Tense)"},
{"correctAnswer": "あなたは毎朝運動をしますか。", "question": "Do you exercise every morning? (Present Tense)"},
{"correctAnswer": "私は来週東京に行く予定です。", "question": "I will go to Tokyo next week. (Future Tense)"},
{"correctAnswer": "彼女は昨年新しい仕事を始めました。", "question": "She started a new job last year. (Past Tense)"},
{"correctAnswer": "私たちは週末によく映画を観ます。", "question": "We often watch movies on weekends. (Present Tense)"},
{"correctAnswer": "私は明日の試験に向けて勉強します。", "question": "I will study for the exam tomorrow. (Future Tense)"},
{"correctAnswer": "田中さんは先月ハワイに旅行しました。", "question": "Mr. Tanaka went to Hawaii last month. (Past Tense)"},
{"correctAnswer": "私の妹は毎日ピアノを練習しています。", "question": "My sister practices the piano every day. (Present Tense)"},
{"correctAnswer": "私たちは夏休みにキャンプに行く予定です。", "question": "We will go camping during the summer vacation. (Future Tense)"},
{"correctAnswer": "昨年、私は新しい車を買いました。", "question": "Last year, I bought a new car. (Past Tense)"},
{"correctAnswer": "私の両親はアパートに住んでいます。", "question": "My parents live in an apartment. (Present Tense)"},
{"correctAnswer": "私は来月、友人の結婚式に出席します。", "question": "I will attend my friend's wedding next month. (Future Tense)"},
{"correctAnswer": "彼は昨夜遅くまで働いていました。", "question": "He worked until late last night. (Past Tense)"},
{"correctAnswer": "私の家族は日曜日によく外食に行きます。", "question": "My family often goes out to eat on Sundays. (Present Tense)"},
{"correctAnswer": "私は来年、新しい仕事を探す予定です。", "question": "I will look for a new job next year. (Future Tense)"},
{"correctAnswer": "山田さんは昨日、病院に行きました。", "question": "Mr. Yamada went to the hospital yesterday. (Past Tense)"},
{"correctAnswer": "私は毎週水曜日に日本語のクラスに通っています。", "question": "I attend a Japanese class every Wednesday. (Present Tense)"},
{"correctAnswer": "私たちは来月、友人の結婚式で踊ります。", "question": "We will dance at our friend's wedding next month. (Future Tense)"},
{"correctAnswer": "私は昨年、新しい家に引っ越しました。", "question": "I moved to a new house last year. (Past Tense)"},
{"correctAnswer": "私の兄は毎日新聞を読んでいます。", "question": "My brother reads the newspaper every day. (Present Tense)"},
{"correctAnswer": "私は明日、友人と映画を見に行く予定です。", "question": "I will go to see a movie with my friend tomorrow. (Future Tense)"},
{"correctAnswer": "私たちは去年、海外旅行に行きました。", "question": "We went on an overseas trip last year. (Past Tense)"},
{"correctAnswer": "私の両親は毎週末、庭の手入れをします。", "question": "My parents take care of the garden every weekend. (Present Tense)"},
{"correctAnswer": "私は来月、新しい趣味を始める予定です。", "question": "I will start a new hobby next month. (Future Tense)"},
{"correctAnswer": "彼女は昨夜、友人の家で遊びました。", "question": "She played at her friend's house last night. (Past Tense)"},
{"correctAnswer": "私は毎朝、７時に起きます。", "question": "I get up at 7 o'clock every morning. (Present Tense)"},
{"correctAnswer": "私は来週、祖父母を訪ねる予定です。", "question": "I will visit my grandparents next week. (Future Tense)"},
{"correctAnswer": "私たちは昨日、公園でピクニックをしました。", "question": "We had a picnic in the park yesterday. (Past Tense)"},
{"correctAnswer": "私の弟は毎日、学校の宿題をします。", "question": "My brother does his homework every day. (Present Tense)"},
{"correctAnswer": "私は来年、新しい言語を勉強する予定です。", "question": "I will study a new language next year. (Future Tense)"},
{"correctAnswer": "私は昨年、新しい仕事に就きました。", "question": "I started a new job last year. (Past Tense)"},
{"correctAnswer": "私の家族は毎週末、一緒に外食に行きます。", "question": "My family goes out to eat together every weekend. (Present Tense)"},
{"correctAnswer": "私は明日、友人の誕生日パーティーに出席します。", "question": "I will attend my friend's birthday party tomorrow. (Future Tense)"},
{"correctAnswer": "私は昨日、新しい本を買いました。", "question": "I bought a new book yesterday. (Past Tense)"},
{"correctAnswer": "私の妻は毎日、料理をします。", "question": "My wife cooks every day. (Present Tense)"},
{"correctAnswer": "私は来年、新しい車を買う予定です。", "question": "I will buy a new car next year. (Future Tense)"},
{"correctAnswer": "私は昨年、英語の試験に合格しました。", "question": "I passed the English exam last year. (Past Tense)"},
{"correctAnswer": "私の友人は毎週末、ジョギングをします。", "question": "My friend goes jogging every weekend. (Present Tense)"},
{"correctAnswer": "私は来月、新しい趣味を始める予定です。", "question": "I will start a new hobby next month. (Future Tense)"},
{"correctAnswer": "私は昨日、友人に手紙を書きました。", "question": "I wrote a letter to my friend yesterday. (Past Tense)"},
{"correctAnswer": "私の両親は毎年、夏休みに旅行に行きます。", "question": "My parents go on a trip every summer vacation. (Present Tense)"},
{"correctAnswer": "私は来週、新しい仕事を始める予定です。", "question": "I will start a new job next week. (Future Tense)"},
{"correctAnswer": "私たちは昨年、新しい家具を買いました。", "question": "We bought new furniture last year. (Past Tense)"},
{"correctAnswer": "私の姉は毎日、ヨガをします。", "question": "My sister does yoga every day. (Present Tense)"},
{"correctAnswer": "私は来月、新しいアパートに引っ越す予定です。", "question": "I will move to a new apartment next month. (Future Tense)"},
{"correctAnswer": "私は昨日、友人と映画を見に行きました。", "question": "I went to see a movie with my friend yesterday. (Past Tense)"},
{"correctAnswer": "私の両親は毎朝、新聞を読みます。", "question": "My parents read the newspaper every morning. (Present Tense)"},
{"correctAnswer": "私は来週、新しい仕事に就く予定です。", "question": "I will start a new job next week. (Future Tense)"},
{"correctAnswer": "私たちは去年、新しい家に引っ越しました。", "question": "We moved to a new house last year. (Past Tense)"},
{"correctAnswer": "私の兄は毎晩、ギターを弾きます。", "question": "My brother plays the guitar every night. (Present Tense)"},
{"correctAnswer": "私は明日、田舎に帰る予定です。", "question": "I will go back to the countryside tomorrow. (Future Tense)"},
{"correctAnswer": "彼女は昨夜、遅くまで勉強していました。", "question": "She studied until late last night. (Past Tense)"},
{"correctAnswer": "私の家族は毎週末、公園に行きます。", "question": "My family goes to the park every weekend. (Present Tense)"},
{"correctAnswer": "私は来月、新しい習い事を始める予定です。", "question": "I will start a new hobby next month. (Future Tense)"},
{"correctAnswer": "私は昨年、新しい車を買いました。", "question": "I bought a new car last year. (Past Tense)"},
{"correctAnswer": "私の友人は毎日、ジムに行きます。", "question": "My friend goes to the gym every day. (Present Tense)"},
{"correctAnswer": "私たちは来年、海外旅行に行く予定です。", "question": "We will go on an overseas trip next year. (Future Tense)"},
{"correctAnswer": "私は昨日、公園で散歩をしました。", "question": "I took a walk in the park yesterday. (Past Tense)"},
{"correctAnswer": "私の妹は毎週末、アルバイトをしています。", "question": "My sister works a part-time job every weekend. (Present Tense)"},
{"correctAnswer": "私は明日、新しい靴を買う予定です。", "question": "I will buy new shoes tomorrow. (Future Tense)"},
{"correctAnswer": "彼は昨夜、遅くまで働いていました。", "question": "He worked until late last night. (Past Tense)"},
{"correctAnswer": "私は毎朝、ヨガをしています。", "question": "I do yoga every morning. (Present Tense)"},
{"correctAnswer": "私たちは来月、キャンプに行く予定です。", "question": "We will go camping next month. (Future Tense)"},
{"correctAnswer": "私は昨日、友人の家で夕食を食べました。", "question": "I had dinner at my friend's house yesterday. (Past Tense)"},
{"correctAnswer": "私の妻は毎日、家事をします。", "question": "My wife does housework every day. (Present Tense)"}
    ],

"n5I01": [
  {"correctAnswer": "私は２５歳です。", "question": "How old are you? (年齢は何歳ですか?) Answer: I am 25 years old."},
  {"correctAnswer": "はい、私は日本語を話すことができます。", "question": "Can you speak Japanese? (日本語を話すことができますか?) Answer: Yes, I can speak Japanese."},
  {"correctAnswer": "ハッカーです。", "question": "What is your occupation? (職業は何ですか?) Answer: I am a Hacker."},
  {"correctAnswer": "ネパールから来ました。", "question": "Where are you from? (どこから来ましたか?) Answer: I am from Nepal."},
  {"correctAnswer": "はい、トリブバン大学で勉強しています。", "question": "Are you currently studying? (現在、勉強していますか?) Answer: Yes, I am currently studying at Tribhuvan University."},
  {"correctAnswer": "はい、私の名前はインドゥ・リンブです。", "question": "What is your name? (名前は何ですか?) Answer: My name is Indu Limbu."},
  {"correctAnswer": "ネパールの文化や歴史に興味があります。", "question": "What interests you about Nepal? (ネパールに興味がある理由は何ですか?) Answer: I am interested in the culture and history of Nepal."},
  {"correctAnswer": "はい、私は日本のビジネス環境に興味があります。", "question": "Why are you interested in working in Japan? (日本で働くことに興味がある理由は何ですか?) Answer: Yes, I am interested in the business environment in Japan."},
  {"correctAnswer": "はい、私はネパール人です。", "question": "Are you Nepali? (ネパール人ですか?) Answer: Yes, I am Nepali."},
  {"correctAnswer": "はい、私はハッカーとして働いています", "question": "Are you currently employed? (現在、働いていますか?) Answer: Yes, I am employed as a Hacker."},
  {"correctAnswer": "はい、私は日本に住んでいます。", "question": "Do you live in Japan? (日本に住んでいますか？) Answer: Yes, I live in Japan."},
  {"correctAnswer": "私は野球が好きです。", "question": "What is your favorite sport? (好きなスポーツは何ですか？) Answer: I like baseball."},
  {"correctAnswer": "はい、私はIT企業で働いています。", "question": "Do you work in an IT company? (IT企業で働いていますか？) Answer: Yes, I work in an IT company."},
  {"correctAnswer": "私はイタリア料理が得意です。", "question": "What cuisine are you good at cooking? (得意な料理は何ですか？) Answer: I am good at cooking Italian food."},
  {"correctAnswer": "はい、私は大学院生です。", "question": "Are you a graduate student? (大学院生ですか？) Answer: Yes, I am a graduate student."},
  {"correctAnswer": "私は夏が好きです。", "question": "Which season do you like? (どの季節が好きですか？) Answer: I like summer."},
  {"correctAnswer": "はい、私は日本のアニメが好きです。", "question": "Do you like Japanese anime? (日本のアニメが好きですか？) Answer: Yes, I like Japanese anime."},
  {"correctAnswer": "私は週末に友達と遊ぶことが多いです。", "question": "What do you often do on weekends? (週末によく何をしますか？) Answer: I often hang out with friends on weekends."},
  {"correctAnswer": "はい、私は日本の文化に興味があります。", "question": "Are you interested in Japanese culture? (日本の文化に興味がありますか？) Answer: Yes, I am interested in Japanese culture."},
  {"correctAnswer": "私の趣味は写真を撮ることです。", "question": "What is your hobby? (趣味は何ですか？) Answer: My hobby is taking photos."},
  {"correctAnswer": "はい、私は日本語を勉強しています。", "question": "Are you studying Japanese? (日本語を勉強していますか？) Answer: Yes, I am studying Japanese."},
  {"correctAnswer": "私はサッカーが好きです。", "question": "What is your favorite sport? (好きなスポーツは何ですか？) Answer: I like soccer."},
  {"correctAnswer": "はい、私は銀行で働いています。", "question": "Do you work at a bank? (銀行で働いていますか？) Answer: Yes, I work at a bank."},
  {"correctAnswer": "私は寿司が得意です。", "question": "What food are you good at making? (得意な料理は何ですか？) Answer: I am good at making sushi."},
  {"correctAnswer": "はい、私は専門学校に通っています。", "question": "Are you attending a vocational school? (専門学校に通っていますか？) Answer: Yes, I am attending a vocational school."},
  {"correctAnswer": "私は冬が好きです。", "question": "Which season do you like? (どの季節が好きですか？) Answer: I like winter."},
  {"correctAnswer": "はい、私は漫画が好きです。", "question": "Do you like manga? (漫画が好きですか？) Answer: Yes, I like manga."},
  {"correctAnswer": "私は週末に映画を見ることが好きです。", "question": "What do you like to do on weekends? (週末に何をするのが好きですか？) Answer: I like to watch movies on weekends."},
  {"correctAnswer": "はい、私は日本の歴史に興味があります。", "question": "Are you interested in Japanese history? (日本の歴史に興味がありますか？) Answer: Yes, I am interested in Japanese history."},
  {"correctAnswer": "私の趣味は料理をすることです。", "question": "What is your hobby? (趣味は何ですか？) Answer: My hobby is cooking."},
  {"correctAnswer": "私はテニスが好きです。", "question": "What is your favorite sport? (好きなスポーツは何ですか？) Answer: I like tennis."},
  {"correctAnswer": "はい、私はIT企業で働いています。", "question": "Do you work in an IT company? (IT企業で働いていますか？) Answer: Yes, I work in an IT company."},
  {"correctAnswer": "私はラーメンが得意です。", "question": "What food are you good at making? (得意な料理は何ですか？) Answer: I am good at making ramen."},
  {"correctAnswer": "はい、私は大学生です。", "question": "Are you a university student? (大学生ですか？) Answer: Yes, I am a university student."},
  {"correctAnswer": "私は春が好きです。", "question": "Which season do you like? (どの季節が好きですか？) Answer: I like spring."},
  {"correctAnswer": "はい、私はアニメが好きです。", "question": "Do you like anime? (アニメが好きですか？) Answer: Yes, I like anime."},
  {"correctAnswer": "私は週末に友達と遊ぶことが好きです。", "question": "What do you like to do on weekends? (週末に何をするのが好きですか？) Answer: I like to hang out with friends on weekends."},
  {"correctAnswer": "はい、私は日本の料理に興味があります。", "question": "Are you interested in Japanese cuisine? (日本の料理に興味がありますか？) Answer: Yes, I am interested in Japanese cuisine."},
  {"correctAnswer": "私の趣味は旅行することです。", "question": "What is your hobby? (趣味は何ですか？) Answer: My hobby is traveling."},
  {"correctAnswer": "私はバドミントンが得意です。", "question": "What sport are you good at? (得意なスポーツは何ですか？) Answer: I am good at badminton."},
  {"correctAnswer": "はい、私は日本に住んでいます。", "question": "Do you live in Japan? (日本に住んでいますか？) Answer: Yes, I live in Japan."},
  {"correctAnswer": "私は野球が好きです。", "question": "What is your favorite sport? (好きなスポーツは何ですか？) Answer: I like baseball."},
  {"correctAnswer": "はい、私は銀行で働いています。", "question": "Do you work at a bank? (銀行で働いていますか？) Answer: Yes, I work at a bank."},
  {"correctAnswer": "私は寿司が得意です。", "question": "What food are you good at making? (得意な料理は何ですか？) Answer: I am good at making sushi."},
  {"correctAnswer": "はい、私は専門学校に通っています。", "question": "Are you attending a vocational school? (専門学校に通っていますか？) Answer: Yes, I am attending a vocational school."},
  {"correctAnswer": "私は冬が好きです。", "question": "Which season do you like? (どの季節が好きですか？) Answer: I like winter."},
  {"correctAnswer": "はい、私は漫画が好きです。", "question": "Do you like manga? (漫画が好きですか？) Answer: Yes, I like manga."},
  {"correctAnswer": "私は週末に映画を見ることが好きです。", "question": "What do you like to do on weekends? (週末に何をするのが好きですか？) Answer: I like to watch movies on weekends."},
  {"correctAnswer": "はい、私は日本の歴史に興味があります。", "question": "Are you interested in Japanese history? (日本の歴史に興味がありますか？) Answer: Yes, I am interested in Japanese history."},
  {"correctAnswer": "私の趣味は料理をすることです。", "question": "What is your hobby? (趣味は何ですか？) Answer: My hobby is cooking."}
    ]
  };

  // Game state variables
  let currentQuestionIndex = 0;
  let currentCategory = wordCode; // You can change this to switch categories
  let score = 0;
  let totalQuestions = 0;

  // Function to display a question
  function displayQuestion(question) {
    if (!questionTextElement || !userInputElement) {
      console.error("Missing HTML elements. Make sure they exist and the script is placed after them.");
      return;
    }

    // Display the question
    questionTextElement.textContent = question.question;

    // Clear previous user input
    userInputElement.value = "";
  }


function checkAnswer() {
  // Check if the answer has already been processed
  if (confirmButton.disabled) {
    return;
  }

  // Disable the button to prevent multiple clicks
  confirmButton.disabled = true;

  const currentQuestion = getCurrentQuestion();
  const userAnswer = userInputElement.value.trim().toLowerCase(); // Remove leading/trailing spaces from user input

  if (userAnswer === currentQuestion.correctAnswer.toLowerCase()) {
    feedbackMessageElement.textContent = "Congratulations!! Correct answer.";
    feedbackMessageElement.style.color = "green"; // Set feedback message color to green for correct answers
    score++;
  } else {
    feedbackMessageElement.textContent = "Wrong Answer! The correct answer was: " + currentQuestion.correctAnswer;
    feedbackMessageElement.style.color = "red"; // Set feedback message color to red for incorrect answers
  }

  currentQuestionIndex++;
  updateScore();

  // Check if all questions are answered
  if (currentQuestionIndex < getCurrentQuestionSet().length) {
    // Enable the button for the next question after a short delay
    setTimeout(() => {
      confirmButton.disabled = false;
    }, 100);
    displayNextQuestion();
  } else {
    // All questions answered, display final score
    displayFinalScore();
  }
}


// Separate function to handle Enter key press
function handleEnterKey(event) {
  if (event.key === 'Enter') {
    event.preventDefault(); // Prevent the default form submission behavior
    checkAnswer();
  }
}

// Attach Enter key press event listener
userInputElement.addEventListener('keydown', handleEnterKey);


  // Function to update the score display
  function updateScore() {
    scoreElement.textContent = `Correct: ${score} | Wrong: ${currentQuestionIndex - score}`;
  }

  // Function to display the final score
  function displayFinalScore() {
    const totalQuestions = getCurrentQuestionSet().length;
    feedbackMessageElement.textContent = `Final Score: Correct: ${score} | Wrong: ${totalQuestions - score}`;
  }

   // Function to get the current question based on the category and index
  function getCurrentQuestion() {
    const questionSet = questionSets[currentCategory];

    if (currentQuestionIndex < questionSet.length) {
      return questionSet[currentQuestionIndex];
    } else {
      // All questions have been answered, return null
      return null;
    }
  }

  // Function to get the current question set based on the category
  function getCurrentQuestionSet() {
    const questionSet = questionSets[currentCategory] || [];
    return questionSet;
  }

function displayNextQuestion() {
  const currentQuestionSet = getCurrentQuestionSet();
  if (currentQuestionSet.length === 0) {
    // No questions defined for this category
    feedbackMessageElement.textContent = "There are no questions defined for this category.";
    userInputElement.disabled = true;
    confirmButton.disabled = true;
  } else {
    const currentQuestion = getCurrentQuestion();

    if (currentQuestion) {
      displayQuestion(currentQuestion);
    } else {
      // No more questions, handle this case
      feedbackMessageElement.textContent = "You have completed all the questions for this category.";
      userInputElement.disabled = true;
      confirmButton.disabled = true;
    }
  }
}
  // Function to reset the game
  function resetGame() {
    currentQuestionIndex = 0;
    score = 0;
    totalQuestions = getCurrentQuestionSet().length;
    updateScore();
    displayNextQuestion();
  }

  // Add event listener to handle button click
  confirmButton.addEventListener('click', checkAnswer);


  // Initial setup
  totalQuestions = getCurrentQuestionSet().length;
  displayNextQuestion();
});
