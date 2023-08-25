/**window.twttr = (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);
 
  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };
 
  return t;
}(document, "script", "twitter-wjs"));

**/

function quote() {
    var quoteDatabase = ["All warfare is based on deception. Hence, when we are able to attack, we must seem unable; when using our forces, we must appear inactive; when we are near, we must make the enemy believe we are far away; when far away, we must make him believe we are near.",
            "If your enemy is secure at all points, be prepared for him. If he is in superior strength, evade him. If your opponent is temperamental, seek to irritate him. Pretend to be weak, that he may grow arrogant. If he is taking his ease, give him no rest. If his forces are united, separate them. Attack him where he is unprepared, appear where you are not expected.",
            "Hold out baits to entice the enemy. Feign disorder, and crush him.",
            "The art of war is of vital importance to the State. It is a matter of life and death, a road either to safety or to ruin. Hence it is a subject of inquiry which can on no account be neglected.",
            "The general who wins the battle makes many calculations in his temple before the battle is fought. The general who loses makes but few calculations beforehand.",
            "The general that hearkens to my counsel and acts upon it, will conquer: let such a one be retained in command! The general that hearkens not to my counsel nor acts upon it, will suffer defeat: — let such a one be dismissed!",
            "If your opponent is of choleric temperament, seek to irritate him.",
            "What is essential in war is victory, not prolonged operations.",
            "Where the army is, prices are high; when prices rise the wealth of the people is exhausted.",
            "There is no instance of a nation benefiting from prolonged warfare.",
            "It is said that if you know your enemies and know yourself, you will not be imperiled in a hundred battles; if you do not know your enemies but do know yourself, you will win one and lose one; if you do not know your enemies nor yourself, you will be imperiled in every single battle.",
            "It is the rule in war, if ten times the enemy's strength, surround them; if five times, attack them; if double, be able to divide them; if equal, engage them; if fewer, defend against them; if weaker, be able to avoid them.",
            "For to win one hundred victories in one hundred battles is not the acme of skill. To subdue the enemy without fighting is the acme of skill.",
            "What the ancients called a clever fighter is one who not only wins, but excels in winning with ease.",
            "He who knows when he can fight and when he cannot will be victorious.",
            "He who is prudent and lies in wait for an enemy who is not, will be victorious.",
            "In the practical art of war, the best thing of all is to take the enemy's country whole and intact; to shatter and destroy it is not so good. So, too, it is better to recapture an army entire than to destroy it, to capture a regiment, a detachment or a company entire than to destroy them.",
            "Victorious warriors win first and then go to war, while defeated warriors go to war first and then seek to win.",
            "To see victory only when it is within the ken of the common herd is not the acme of excellence.",
            "One defends when his strength is inadequate, he attacks when it is abundant.",
            "The good fighters of old first put themselves beyond the possibility of defeat, and then waited for an opportunity of defeating the enemy. To secure ourselves against defeat lies in our own hands, but the opportunity of defeating the enemy is provided by the enemy himself. Thus the good fighter is able to secure himself against defeat, but cannot make certain of defeating the enemy.",
            "Management of many is the same as management of few. It is a matter of organization.",
            "When torrential water tosses boulders, it is because of its momentum. When the strike of a hawk breaks the body of its prey, it is because of timing.",
            "The quality of decision is like the well-timed swoop of a falcon which enables it to strike and destroy its victim.",
            "A skilled commander seeks victory from the situation and does not demand it of his subordinates.",
            "Be extremely subtle, even to the point of formlessness. Be extremely mysterious, even to the point of soundlessness. Thereby you can be the director of the opponent's fate.",
            "All men can see these tactics whereby I conquer, but what none can see is the strategy out of which victory is evolved.",
            "The ultimate in disposing one's troops is to be without ascertainable shape. Then the most penetrating spies cannot pry in nor can the wise lay plans against you.",
            "And therefore those skilled in war bring the enemy to the field of battle and are not brought there by him.",
            "When the enemy is at ease, be able to weary him; when well fed, to starve him; when at rest, to make him move. Appear at places to which he must hasten; move swiftly where he does not expect you.",
            "To a surrounded enemy, you must leave a way of escape.",
            "The art of war teaches us to rely not on the likelihood of the enemy's not coming, but on our own readiness to receive him; not on the chance of his not attacking, but rather on the fact that we have made our position unassailable.",
            "Too frequent rewards indicate that the general is at the end of his resources; too frequent punishments that he is in acute distress.",
            "A leader leads by example not by force.",
            "If words of command are not clear and distinct, if orders are not thoroughly understood, the general is to blame. But if his orders are clear, and the soldiers nevertheless disobey, then it is the fault of their officers.",
            "If fighting is sure to result in victory, then you must fight, even though the ruler forbid it; if fighting will not result in victory, then you must not fight even at the ruler's bidding.",
            "The general who advances without coveting fame and retreats without fearing disgrace, whose only thought is to protect his country and do good service for his sovereign, is the jewel of the kingdom.",
            "Treat your men as you would your own beloved sons. And they will follow you into the deepest valley.",
            "If our soldiers are not overburdened with money, it is not because they have a distaste for riches; if their lives are not unduly long, it is not because they are disinclined to longevity.",
            "Speed is the essence of war. Take advantage of the enemy's unpreparedness; travel by unexpected routes and strike him where he has taken no precautions.",
            "Bestow rewards without respect to customary practice; publish orders without respect to precedent. Thus you may employ the entire army as you would one man.",
            "Move not unless you see an advantage; use not your troops unless there is something to be gained; fight not unless the position is critical. No ruler should put troops into the field merely to gratify his own spleen; no general should fight a battle simply out of pique. If it is to your advantage, make a forward move; if not, stay where you are. Anger may in time change to gladness; vexation may be succeeded by content. But a kingdom that has once been destroyed can never come again into being; nor can the dead ever be brought back to life. Hence the enlightened ruler is heedful, and the good general full of caution. This is the way to keep a country at peace and an army intact.",
            "It is essential to seek out enemy agents who have come to conduct espionage against you and to bribe them to serve you. Give them instructions and care for them. Thus doubled agents are recruited and used.",
            "Now the reason the enlightened prince and the wise general conquer the enemy whenever they move and their achievements surpass those of ordinary men is foreknowledge.",
            "Of all those in the army close to the commander none is more intimate than the secret agent; of all rewards none more liberal than those given to secret agents; of all matters none is more confidential than those relating to secret operations.",
            "Secret operations are essential in war; upon them the army relies to make its every move."],
        quotePosition = Math.floor((Math.random() * quoteDatabase.length)),
        thisQuote = quoteDatabase[quotePosition],
  twitQuote = thisQuote.replace(";",",").slice(0, 131);

        document.getElementById("theQuote").innerHTML = thisQuote;

document.getElementById("twitterButton").href = "https://twitter.com/intent/tweet?text="+twitQuote+"~Sun%20Tzu";  
}