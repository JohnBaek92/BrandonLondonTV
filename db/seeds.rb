# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies =Movie.create([{ name: 'Star Wars'], { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# post =Post.create({title: "10 Years Later... My Top Moments From Super Bowl 42", body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque cumque dolores rem libero temporibus impedit neque. Ad at eius unde assumenda a nam ab laudantium quam, recusandae eveniet, beatae nostrum?"])

# press =Page.create({page_type: "Press"})

# links =[
#     {
#         title: "Eye Opener’ closes to make room for brand-new ‘morning’ (update)",
#         link: "http://www.star-telegram.com/entertainment/tv/article156700024.html",
#         image: "https://i.imgur.com/ZPheA08.jpg"
#    },
#     {
#         title: "Landon Collins' Giants charity softball game rosters announced",
#         link: "http://www.nj.com/giants/index.ssf/2017/05/landon_collins_giants_charity_softball_game_roster.html",
#         image: "http://image.nj.com/home/njo-media/width960/img/njcom_photos/photo/2017/05/25/-43d46740736d3c8e.JPG"
#     },
#     {
#         title: "FootBallGamePlan - Brandon London's Event - Being Multi-Layered - May 27, 2015",
#         link: "https://www.youtube.com/watch?v=DH0enkzKWJY&feature=youtu.be",
#         image: "http://s3.amazonaws.com/brandonlondontv/images/images/000/000/005/original/6778593.jpg?1517252117"

#     },
#     {
#         title: "Roster evaluation and Brandon London interview | Talk Is Cheap",
#         link: "http://www.nj.com/giants/index.ssf/2016/08/listen_roster_evaluation_and_brandon_london_interv.html",
#         image: "https://i.imgur.com/RSmV4Rl.jpg"
#     },
#     {
#         title: "The Top 10 Sexiest Montreal Alouettes Players",
#         link: "https://www.mtlblog.com/best-of-mtl/the-10-most-drool-worthy-players-on-the-montreal-alouettes",
#         image: "http://s3.amazonaws.com/brandonlondontv/images/images/000/000/007/original/246071.jpg?1517252117"
#     },
#     {
#         title: "Canada.com - Montreal Alouettes receiver Brandon London announces CFL retirement - June 3, 2015",
#         link: "http://o.canada.com/sports/montreal-alouettes-receiver-brandon-london-announces-cfl-retirement",
#         image: "http://s3.amazonaws.com/brandonlondontv/images/images/000/000/008/original/8018075.jpg?1517252118"
#     },
#     {
#         title: "L'Etage Magazine - Catches Clinic by Brandon London  - May 19, 2015",
#         link: "http://www.letagemagazine.com/catches-clinic-by-brandon-london/",
#         image: "http://s3.amazonaws.com/brandonlondontv/images/images/000/000/009/original/7760789.jpg?1517252118"
#     },
#     {
#         title: "Montreal Gazette - The Snap: London's retirement caught Higgins by surprise - June 4, 2015",
#         link: "http://montrealgazette.com/sports/football/cfl/montreal-alouettes/the-snap-londons-retirement-caught-higgins-by-surprise",
#         image: "http://s3.amazonaws.com/brandonlondontv/images/images/000/000/010/original/6353431.jpg?1517252119"
#     },
# ]
# links.each do |link|
#     a =Link.create({
#         title: link[:title],
#         link: link[:link],
#         page_id: press.id
#     })
#     Image.create({
#         imageable_id: a.id,
#         imageable_type: a.class.to_s,
#         image: link[:image]
#     })
# end

Blog.create({
    :content=> [["title","10 Years Later..."],
        ["title2","My Top Moments From Super Bowl 42!"],
        ["image","https://i.imgur.com/uQu83S6.jpg"],
        ["subtitle","Has it been 10 years?"],
        ["text","This year marks the 10th year anniversary of the Giants historic Super Bowl 42 Championship win over the undefeated New England Patriots. I was only a young rookie on the Giants practice roster but it felt like I had 53-man roster privileges. I hung out with the big names on the team, I got a little press and publicity throughout the season and the city of New York showed me love! You all remember the on the field journey of the team that season but what a year it was off the field as well. From modeling on BET’s Rip the Runway to partying on day offs in Atlantic City for free to game nights at Reuben Droughns apartment where I met rapper Joe Budden and other celebrities, I’ll never forget the off the field adventures that season either. They made me work harder on the field because I never wanted that part of my life to end! FAST FORWARD TO THE SUPER BOWL..."],
        ["subtitle","You have arrived in Arizona…"],
        ["image","https://i.imgur.com/bfFuynb.jpg"],
        ["image","https://i.imgur.com/HUZa9Nu.jpg"],
        ["image","https://i.imgur.com/ZaYWN20.jpg"],
        ["image","https://i.imgur.com/7LdTGqF.jpg"],
        ["text","I can’t remember the name of the resort we stayed at but I remember it was so damn far from the action lol. The place was huge! The rooms were distinctly better than when we went to London earlier in the year for the Dolphins game. My roommate that week was running back K.J Harris. I remember walking through what felt like a maze to get to my room. And when I had finally arrived, there was a BIG Reebok bag full of Super Bowl gear because I was an endorsed athlete by Reebok. Christmas gifts for DAYS lol!"],
        ["subtitle","David Tyree’s week"],
        ["image","https://i.imgur.com/ZfY0b1O.jpg"],
        ["text","David Tyree was the team’s spiritual leader and ‘utility guy’. He was a special teams monster and did a lot of the dirty work. That week, Plax hurt his knee and DT had a larger role in the pass game than usual weeks. There was one practice where it felt like he was dropping everything thrown his way. Don’t try and say I’m hating saying he was dropping everything. Did you watch his special on NFL Network? "],
        ["text","Fast forward to the game where he made on the of greatest catches in Super Bowl history! I remember thinking ‘GOD is REAL’ when he made the catch!"],
        ["image","https://i.imgur.com/TvDU22I.jpg"],
        ["subtitle","All eyes on Stray!"],
        ["image","https://i.imgur.com/4LVNRUl.jpg"],
        ["text","Throughout the season, I would constantly ask Michael Strahan about how to go about building an off the field brand. I wanted football to open doors for me in terms of becoming a model and actor. I remember he would always call me, “Lil Will Smith!” Fast forward to media day! The media was all over him."],
        ["image","https://i.imgur.com/TPXPFIx.jpg"],
        ["text","Every global media outlet wanted to interview him or fan wanted a picture with him. He handled everything so smoothly. It was like he was in his element and he wasn’t bending the edge on a pass rush, he was simply vibing with ‘the people/. I remember sitting there watching him and telling myself, “That guy will be a SUPERSTAR. Follow his blueprint!”"],
        ["subtitle","Thank you Kellie Pickler!"],
        ["image","https://i.imgur.com/GVK0mff.jpg"],
        ["text","I didn’t do many interviews on media day. I mean, why would someone want to interview a Practice Squad guy who hadn’t seen live game action since the Pre-season? I was in awe the entire time. Taking everything in and saying to myself, “One day you’ll be back and you’ll be doing all the top interviews!” I was an ambitious rookie!"],
            ["image","https://i.imgur.com/Zls2Uxy.jpg"],
            ["text","Then I remember getting tapped on the shoulder by a short blonde haired woman with a slight country accent, asking to help her get an interview with the overly crowded Michael Strahan. I had NO CLUE who this woman was but she seemed fun and she had a camera crew with her, so I thought shiiiiii*t why not lol? We decided that she’d hop on my shoulders to make her taller and she’d ask Stray some questions. I didn’t think much of it until my mom called me that night and said she saw me on the Tonight Show. That short blonde haired woman was American Idol finalist Kellie Pickler doing some correspondent work for Jay Leno. TV TIME!!"],
            ["subtitle","GAME TIME!"],
            ["image","https://i.imgur.com/2eBQnl1.jpg"],
            ["image","https://i.imgur.com/05tpy2t.jpg"],
            ["image","https://i.imgur.com/n3juVVO.jpg"],
            ["image","https://i.imgur.com/GHJCXC2.jpg"],
            ["text","I remember seeing Alicia Keys and becoming a ‘fanboy’, running up to her to ask for a picture pregame and all the other guys who didn’t dress for the game jumping in the picture. I remember the energy in the tunnel as we were about to run out. Every single player on our team knew we were going to win that game. I remember Eli warming up on the sideline and having this calmness to him. It was the biggest game of this guys career and he was so poised."],
            ["image","https://i.imgur.com/JI3ycMD.jpg"],
            ["image","https://i.imgur.com/Lhg6Mci.jpg"],
            ["text","After we had won, the confetti and photographers littered the field. I was trying to sneak as close to the trophy as possible because I wanted to be seen on T.V! I specifically remember wanting to get a picture with my wide receivers coach, Mike Sullivan. About 11 months back, he drove to UMASS in the snow to work me out on my Pro Day and was the coach who called on draft day to offer me an Undrafted Free Agent contract with the Giants!"],
            ["subtitle","PARTY TIME!"],
            ["image","https://i.imgur.com/LxU9M4U.jpg"],
            ["image","https://i.imgur.com/jhfUMFT.jpg"],
            ["image","https://i.imgur.com/PNxZ28h.jpg"],
            ["image","https://i.imgur.com/Puy9J2Y.jpg"],
            ["image","https://i.imgur.com/8BZwMat.jpg"],
            ["image","https://i.imgur.com/XomcFoC.jpg"],
            ["text","I remember going back to the team hotel briefly to celebrate with the organization, friends, and family. I think we stayed there for about less than an hour and then went out to Old Scottsdale to celebrate. And when I say celebrate...boy did I have the time of my life! At the time, Browns WR Braylon Edwards was cool with a lot of guys on the team so I went out with teammates and Braylon! I remember Patron being poured in my mouth from the bottle and seeing some of the most beautiful women I’ve ever seen in my life! The entire night was crazy! I didn’t get back to the team hotel until the next morning. I had to run to my hotel room, quickly pack my bags and rush to the team bus. I almost missed the team bus back to the airport! Almost! And even if I did, I wouldn’t have cared because I was a Super Bowl Champion!"],
            ["text","All in all. Thank you once again to the game of FOOTBALL for allowing me to not only live but be apart some of my brothers dreams!"],
        ]
})

