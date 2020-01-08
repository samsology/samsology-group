const quotes = [
  
  {
    name:'Napoleon Hill',
    quote:'patience, persistence and perspiration amke an unbeatable combination for sucess'
    
  },
  {
    name:'zeno',
    quote:'avarice in old age is foolish; for what can be more absurd than to increase our provision for the road the nearer we approach to our journey`s end.'
  },
  {
    name:'oscar wilde',
    quote:'by persistently remaining single a man converts himself into a permanent public temptation'
  },
  {
    name:'johann wolfgang',
    quote:'behavior is a mirror in which every one display his image.'
  },
  {
    name:'e.c stakman',
    quote:'when man learns to understand and control his own behavior as well as he is learning to understand and control the behavior of crop plant and animals,  he may be justified in believing that he become civilized.'
  },
  {
    name:'christopher morley',
    quote:'beauty is only skin deep, but it`s a valuable asset if you`re poor or have not an sense.'
  },
  {
    name:'john dwright',
    quote:'the bible is a window in this prison of hope, through which we look into eternity.'
  },
  {
    name:'alfred north',
    quote:'the total absence of humor from the bible is one of the most singular things in all literature'
  },
  {
    name:'helen keller',
    quote:'my darkness has filled with the light of intelligence,and behold, the outer day-lit world was stumbling and groping in social blindness.'
  },
  {
    name:'greogory I',
    quote:'when a girl ceases to blush, she has lost the most powerful charm of her beauty.'
  },
  {
    name:'francis bacon',
    quote:'a heathly body is a guest chamber for the soul;a sick body is a prison'
  },
  {
    name:'william hazlitt',
    quote:'if i have not read a book before, it is, for all intents and purposes, new to me whether it was printed yesterday or threee hundred years ago.'
  },
  {
    name:'ralph emerson',
    quote:'some books leave us free and some books make us free'
  },
  {
    name:'theodore parker',
    quote:'the books that help you the most are those which make you think the most.'
  },
  {
    name:'g.c lichtenberg',
    quote:'a book is a mirror, if an ass peers into it, you can`t expect an apostle to look out.'
  },
  {
    name:'mark twain',
    quote:'there are two times in a man`s life when he should not speculate, when he can`t afford it, and when he can.'
  },
  {
    name:'john d rockefeller',
    quote:'a friendship founded on business is better than a business founded on friendship.'
  },
  {
    name:'henry david',
    quote:'it is not enough to be busy, so are ant. the question is: what are we busy about.'
  },
  {
    name:'lord byron',
    quote:'the busy have no time for tears.'
  },
  {
    name:'j. ogden armour',
    quote:'whoever admit that he is too busy to improve his methods has acknowledged himself to be at the end of his rope. and that is always the saddest predicament which anyone can get into.'
  },
  {
    name:'samuel johnson',
    quote:'what we hope ever to do with ease, we must learn first to do with diligence.'
  },
  {
    name:'don marquis',
    quote:'the successful people are the ones who can think up things for the rest of the world to keep at.'
  },
  {
    name:'ambrose bierce',
    quote:'calamity are of two kinds, misfortune to ourselves, and good fortune to others.'
  },
  {
    name:'charles hole',
    quote:'deliberate with caution, but act with decision; and yield with graciousness, or oppose with firmness'
  },
  {
    name:'publilius syrus',
    quote:'it is a good thing to learn caution from the misfortunes of others.'
  },
  {
    name:'olin miller',
    quote:'to be absolutely certain, about something, one must konw everything or  nothing about it.'
  },
  {
    name:'charles f ketterring',
    quote:'the world hate change, yet it is the only thing that has brought progress.'
  },
  {
    name:'francis bacon',
    quote:'he that will not apply new remedies must expect new evils'
  },
  {
    name:'leo tolstol',
    quote:'everyone thing of changing the world, but no one thinks of changing himself'
  },
  {
    name:'george d boardman',
    quote:'let`s not say man is the architect of his own fortune, but let`s say, every man is the architect of his own character.'
  },
  {
    name:'benjamin disraeli',
    quote:'character do not change. opinions alter, but characters are only developed'
  },
  {
    name:'jean paul richter',
    quote:'a man never discloss his own character so clearly as when he discribes another`s.'
  },
  {
    name:'anna jameson',
    quote:'childhood sometimes does pay a second visit to man; youth never.'
  },
  {
    name:'ray l wilbur',
    quote:'the potential possibilities of any child are the most intriguing and stimulating in all creation'
  },
  {
    name:'oliver w holmes',
    quote:'pretty much all the honest truth telling there is in the world done by children.'
  },
  {
    name:'ed howe',
    quoten:'don`t take up a man`s time talking about the smartness of your children; he wants to talk to you about the smartness of his children'
  },
  {
    name:'charles temptation',
    quote:'christianity does not remove you from the world and its problems, it makes you fit ti live in it, triumphantly and usefully.'
  },
  {
    name:'harry emerson',
    quote:'he who chooses the begining of a road chooses the place it leads to. it is the means that determine the end'
  },
  {
    name:'williams james',
    quote:'when you to make a choice and don`t make it, that in itself is a choice.'
  },
  {
    name:'richard henry dana',
    quote:'better to be driven out from men than to be disliked of children'
  },
  {
    name:'Thamos Edison',
    quote:'i have not failed, i just found 10,000 ways that wont work'
  },
  {
    name:'Dale Carnegie',
    quote:'if you want to conquer fear, dont sit home and think about it. go out and get busy'
  },
  {
    name:'Steve Job',
    quote:'have the courage to follow your heart annd intuition'
  },
  {
    name:'Henry Ford',
    quote:'too many men are of being called fools'
  },
  {
    name:'Mark zeckerberg',
    quote:'find out the things that you are passionate about'
  },
  {
    name:'Elon Musk',
    quote:'when something is important, you do it even if the odds are not in your favour'
  },
  {
    name: 'Johnson Samuel',
    quote: 'i carry the consciousness of this big god all the time...'
    
  },
  {
    name: 'david oyedepo',
    quote: 'your assignment is not about what you want, it is about to do to make impact'
    
  },
  {
    name: 'david oyedepo',
    quote: 'thinking about the car to buy is the dreams of babies, the vision of what to DO is the dream of men'
    
  },
  {
    name: 'david oyedepo',
    quote: 'a star is always committed to information hunting..'
    
  },
  {
    name: 'david oyedepo',
    quote: 'it is not what you have that determine your worth, it is what you add to humanity'
    
  },
  {
    name: 'david oyedepo',
    quote: 'life is all about adding value to others'
    
  },
  {
    name: 'david oyedepo',
    quote: 'if you do not want to remain outdated in your field, give attention to reading'
    
  },
  
  {
    name:'francois rochafoucald',
    quote:'absence diminishes litle passion and increase great ones,as wind extinguishes candles can fan a fire'
  },
  {
    name:'thomas a kempls',
    quote:'when a man is out of sight, it is not too long before he is out of sight.'
  },
  {
    name:'charles reade',
    quote:'the absent are like children,helpless to defend themselves'
  },
  {
    name:'richard whately',
    quote:'the best security against revolution is constant correction of abuses and the introduction of needed improvement'
  },
  {
    name:'jean fontaine',
    quote:'anyone entrusted with power will abuse it if not also animated with love and virtue'
  },
  {
    name:'jonas salk',
    quote:'i feel that the greatest reward for doing id the opportunity to do more'
  },
  {
    name:'gabriel heatter',
    quote:'mere longevity is a good thing for those who watch life from the side lines. for those who play the game. an hours may be a year.'
  },
  {
    name:'stewart e white',
    quote:'do not attempt to do a thing unless you are sure of yourself;but do not relinguish it simpply because someone is not sure of you.'
  },
  {
    name:'samuel johnson',
    quote:'life affords no higher pleasure than of surmounting difficulties,passing from one step of sucess to another forming new wishes and seeing them gratified.'
  },
  {
    name:'ralph emerson',
    quote:'thoughts is blossom; language the bud; action the fruit behind it.'
  },
  {
    name:'john locke',
    quote:'the action of men are the best interpreter of thier thoughts '
  },
  {
    name:'ralph emerson',
    quote:'make yourself neccessary to someone'
  },
  {
    name:'mahatma gandhi',
    quote:'adaptability is not imitation, it means power of resistance and assimilation.'
  },
  {
    name:'alfred north',
    quote:'without adventure civilation is in full decay'
  },
  {
    name:'johann von schiler',
    quote:'who dares nothing, need hope for nothing'
  },
  {
    name:'steuart h britt',
    quote:'doing business without advertising is like winking at a girl in a dark, you know whar you are doing but nobody else does'
  },
  {
    name:'jawaharlal nehru',
    quote:'the only thing to do with good advice is to pass it on. it is never of any use to oneself'
  },
  {
    name:'washington irving',
    quote:'a woman`s life is a history of the affection'
  },
  {
    name:'chinese proverb',
    quote:'the gem cannot be polished without friction, nor man perfected without trials'
  },
  {
    name:'felicia hermans',
    quote:'strength is born in the deep silence of long-suffering hearts, not amid joy'
  },
  {
    name:'henry ward',
    quote:'affliction comes to us, not to make us sad but sober, not to make us sorry but wise'
  },
  {
    name:'james a garfield',
    quote:'if wrinkles must be written upon our brows, let them not be written upon the heart. the spirit should never grow old'
  },
  {
    name:'jean rostand',
    quote:'a man is not as long as as he is seeking something'
  },
  {
    name:'chinese proverb',
    quote:'the woman who tells her age is either too young to have anything to lose or too old to lose anything.'
  },
  {
    name:'george edward',
    quote:'agitation is that part of our intellectual life where vitality results; there ideas are born, breed and bring forth'
  },
  {
    name:'joel hawes',
    quote:'aim at the sun, and you may not reach it; but your arrow will fly far higher than if aimed at an obect on a level with yourself'
  },
  {
    name:'booker t washington',
    quote:'you can`t hold a man down without going down with him.'
  },
  {
    name:'niccolo machiavelli',
    quote:'ambition is so powerful a passion in the human breast, that however high we reach we are never satisfied.'
  },
  {
    name:'henry ford II',
    quote:'our country is still young and its potential is still enormous. we should remember,as we look toward the future, that the more fully we and achieve freedom and equal opportunity-not simply for ourselves but for others'
  },
  {
    name:'daniel webster',
    quote:'the world is governed more by appearance than by realities, so that it is fully as necessary to seem to know something as to know it.'
  },
  {
    name:'ellas root beadle',
    quote:'half the work that is done in this world is to make things appear what they are not.'
  },
  {
    name:'voltaire',
    quote:'people generally quarrel becauase they cannot agrue.'
  },
  {
    name:'louis brandeis',
    quote:'behind every agruement is someone`s ignorance.'
  },
  {
    name:'john f kennedy',
    quote:'if art is to nourish the roots of our culture, society must set the artist free to follow his vision whenever it takes him.'
  },
  {
    name:'frank llyod wright',
    quote:'if it keeps up, men will atrophy all his limbs but the push-button finger.'
  },
  {
    name:'adlal e stevenson',
    quote:'we live in a time when automation is ushering in a second inustrial revolution.'
  },
  {
    name:'eddy  zhong',
    quotes:'no one has ever change the world by doing what the they ask them to do'
  },
  {
    name:'eddy zhong',
    quotes:'the first part to building a great company is to assemble a great team'
  },
  {
    name:'unknown',
    quotes:'what you show is more important than what you say'
  },
  {
    name:'johnson samuel',
    quotes:'because we live a country where they is no security, creativity has no  soil to grow'
  },
  {
    name:'unknown',
    quotes:`true learning- a learning that is permanent and useful that leads to the intelligent
    action and further learning- can arise only out of the experience, interest and concerns of the learner`
  },
  {
    name:'david oyedepo',
    quotes:'time conscious people make the most of all season'
  },
  {
    name:'',
    quotes:''
  },
  {
    name:'',
    quotes:''
  },
  {
    name:'',
    quotes:''
  },
  
]
// ------------------------'QUOTES' PROJECT (1000)-------------------------------------------------------------------------------//

const quoteBtn = document.querySelector('#quoteBtn');
const quoteAuthor =document.querySelector('#quoteAuthor');
const quote = document.querySelector('#quote');

quoteBtn.addEventListener('click', dispayQuote);

function dispayQuote () {
  let number = Math.floor(Math.random()*quotes.length);
  
  
  quoteAuthor.innerHTML =quotes[number].name;
  quote.innerHTML =quotes[number].quote;
}










