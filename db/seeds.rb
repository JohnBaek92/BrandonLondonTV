# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts ENV['s3_bucket']

post = Post.create({title: "10 Years Later... My Top Moments From Super Bowl 42", body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque cumque dolores rem libero temporibus impedit neque. Ad at eius unde assumenda a nam ab laudantium quam, recusandae eveniet, beatae nostrum?"})

Image.create({imageable_type: "Post", imageable_id: post.id, image: "https://assets.pokemon.com/assets/cms2/img/watch-pokemon-tv/seasons/season20/season20_ep28_ss01.jpg"})
Image.create({imageable_type: "Post", imageable_id: post.id, image: "http://digimon-adventure.net/images/character/gabumon.png"})

press = Page.create({page_type: "Press"})

links = [
    {
        title: "Eye Opener’ closes to make room for brand-new ‘morning’ (update)",
        link: "http://www.star-telegram.com/entertainment/tv/article156700024.html",
        image: "https://i.imgur.com/ZPheA08.jpg"
    },
    {
        title: "Landon Collins' Giants charity softball game rosters announced",
        link: "http://www.nj.com/giants/index.ssf/2017/05/landon_collins_giants_charity_softball_game_roster.html",
        image: "https://i.imgur.com/on8QI8Q.jpg"
    },
    {
        title: "FootBallGamePlan - Brandon London's Event - Being Multi-Layered - May 27, 2015",
        link: "https://www.youtube.com/watch?v=DH0enkzKWJY&feature=youtu.be",
        image: "https://i.imgur.com/6vwAmWs.jpg"

    },
    {
        title: "Roster evaluation and Brandon London interview | Talk Is Cheap",
        link: "http://www.nj.com/giants/index.ssf/2016/08/listen_roster_evaluation_and_brandon_london_interv.html",
        image: "https://i.imgur.com/RSmV4Rl.jpg"
    },
    {
        title: "The Top 10 Sexiest Montreal Alouettes Players",
        link: "https://www.mtlblog.com/best-of-mtl/the-10-most-drool-worthy-players-on-the-montreal-alouettes",
        image: "https://i.imgur.com/ciJivcz.jpg"
    },
    {
        title: "Canada.com - Montreal Alouettes receiver Brandon London announces CFL retirement - June 3, 2015",
        link: "http://o.canada.com/sports/montreal-alouettes-receiver-brandon-london-announces-cfl-retirement",
        image: "https://i.imgur.com/olt5ztV.jpg"
    },
    {
        title: "L'Etage Magazine - Catches Clinic by Brandon London  - May 19, 2015",
        link: "http://www.letagemagazine.com/catches-clinic-by-brandon-london/",
        image: "https://i.imgur.com/indi584.jpg"
    },
    {
        title: "Montreal Gazette - The Snap: London's retirement caught Higgins by surprise - June 4, 2015",
        link: "http://montrealgazette.com/sports/football/cfl/montreal-alouettes/the-snap-londons-retirement-caught-higgins-by-surprise",
        image: "https://i.imgur.com/yykJn5P.jpg"
    },
]
links.each do |link|
    a = Link.create({
        title: link[:title],
        link: link[:link],
        page_id: press.id
    })
    Image.create({
        imageable_id: a.id,
        imageable_type: a.class.to_s,
        image: link[:image]
    })
end

