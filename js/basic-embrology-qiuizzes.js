const questions=[
  { questions:'the sexual cycle is controlled by??',
  answers:[
    {text:'hypothalamus', correct:true}, {text:'cerebrum', correct:false}, {text:'autonpmic system', correct:false}, {text:'sensation', correct:false},
  ]},
  { questions:'what is the maximum number of follicle that reach maturity under normal condition?',
  answers:[
    {text:'2', correct:false}, {text:'1', correct:true}, {text:'3', correct:false}, {text:'4', correct:false},
  ]},
  { questions:'the slight pain felt by most womnen during ovulation is called ?',
  answers:[
    {text:'early pain', correct:false}, {text:'middle pain', correct:true}, {text:'late pain', correct:false}, {text:'none', correct:false},
  ]},
  { questions:'the process by which female and male gametes fused is known as------?',
  answers:[
    {text:'mating', correct:false}, {text:'stimuation', correct:false}, {text:'fertilation', correct:true}, {text:'ovulation', correct:false},
  ]},
  { questions:'how many % of sperm deposited into the vagina get to the cervix ?',
  answers:[
    {text:'10%', correct:false}, {text:'20%', correct:false}, {text:'5%', correct:false}, {text:'1%', correct:true},
  ]},
  { questions:'The trip of sperm from the cervix to oviduct requires a minimum of ?',
  answers:[
    {text:'2 day', correct:false}, {text:'2 hour', correct:true}, {text:'2 minute', correct:false}, {text:'2 second', correct:false},
  ]},
  { questions:'about ------ sperms are released into the female genital tract during mating?',
  answers:[
    {text:'200-400thousand', correct:false}, {text:'200-300Million', correct:true}, {text:'50-30Million', correct:false}, {text:'4-5Million', correct:false},
  ]},
  { questions:'if the male condom is made of latex, then the female condom is made of-----? ?',
  answers:[
    {text:'latex', correct:false}, {text:'polyethene', correct:false}, {text:'rubber', correct:false}, {text:'polyurethane', correct:true},
  ]},
  { questions:'contraceptive pills are taken for a period of------days ?',
  answers:[
    {text:'21', correct:true}, {text:'14', correct:false}, {text:'28', correct:false}, {text:'30', correct:false},
  ]},
  { questions:'what is thw drug RU-486(mifepristone) used for ?',
  answers:[
    {text:'pain', correct:false}, {text:'antidepressant', correct:false}, {text:'abortion', correct:true}, {text:'acne', correct:false},
  ]},
  { questions:'laparoscopy is a method used for the extraction of-------?',
  answers:[
    {text:'sperms', correct:false}, {text:'embryo', correct:false}, {text:'occytes', correct:true}, {text:'zygote', correct:false},
  ]},
  { questions:' the risk of producing malformed offspring by in vitro procedures is  ?',
  answers:[
    {text:'low', correct:true}, {text:'mild', correct:false}, {text:'high', correct:false}, {text:'very high', correct:false},
  ]},
  { questions:'Severe male infertility, in which the ejaculate contains very few live sperm is called  ?',
  answers:[
    {text:'monozoospermia', correct:false}, {text:'polyzoospermia', correct:false}, {text:'dyszoospermia', correct:false}, {text:'oligozoospermia', correct:true},
  ]},
  { questions:'the wall of the utrerus consist of ----------layers ?',
  answers:[
    {text:'1', correct:false}, {text:'2', correct:false}, {text:'3', correct:false}, {text:'4', correct:true},
  ]},
  { questions:'------is a series of mitotic divisions that results in an increase in cells?',
  answers:[
    {text:'cleavege', correct:false}, {text:'duplication', correct:false}, {text:'complexization', correct:false}, {text:'none', correct:false},
  ]},
  { questions:'What is one of the primary causes of infertility in men ?',
  answers:[
    {text:'low sex drive', correct:false}, {text:'low sperm count', correct:true}, {text:'azoospermia', correct:false}, {text:'high sperm count', correct:false},
  ]},
  { questions:'what is the fraction of the implanting genome derived from the father?',
  answers:[
    {text:'1/3', correct:false}, {text:'1/2', correct:true}, {text:'1/4', correct:false}, {text:'1', correct:false},
  ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
]