# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts ENV['s3_bucket']

post = Post.create({title: "My First Post", body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque cumque dolores rem libero temporibus impedit neque. Ad at eius unde assumenda a nam ab laudantium quam, recusandae eveniet, beatae nostrum?"})

Image.create({imageable_type: "Post", imageable_id: post.id, image: "https://assets.pokemon.com/assets/cms2/img/watch-pokemon-tv/seasons/season20/season20_ep28_ss01.jpg"})
Image.create({imageable_type: "Post", imageable_id: post.id, image: "http://digimon-adventure.net/images/character/gabumon.png"})

press = Page.create({page_type: "Press"})

links = [
    {
        title: "FootBallGamePlan - Brandon London's Event - Being Multi-Layered - May 27, 2015",
        link: "https://www.youtube.com/watch?v=DH0enkzKWJY&feature=youtu.be",
        image: "http://www.brandonlondontv.com/uploads/5/4/7/5/54754123/6778593.jpg"

    },
    {
        title: "The Top 10 Sexiest Montreal Alouettes Players",
        link: "https://www.mtlblog.com/best-of-mtl/the-10-most-drool-worthy-players-on-the-montreal-alouettes",
        image: "http://www.brandonlondontv.com/uploads/5/4/7/5/54754123/246071.jpg"
    },
    {
        title: "Montreal Alouettes - Brandon London Announces Retirement - June 3, 2015",
        link: "http://en.montrealalouettes.com/article/brandon-london-announces-retirement",
        image: "http://www.brandonlondontv.com/uploads/5/4/7/5/54754123/7619840.jpg"
    },
    {
        title: "Boomtown Fitness & Media - Art for Culture - May 29, 2015",
        link: "http://boomtownfm.com/2015/05/29/art-for-culture/",
        image: "http://www.brandonlondontv.com/uploads/5/4/7/5/54754123/7553785.jpg"
    },
    {
        title: "Canada.com - Montreal Alouettes receiver Brandon London announces CFL retirement - June 3, 2015",
        link: "http://o.canada.com/sports/montreal-alouettes-receiver-brandon-london-announces-cfl-retirement",
        image: "http://www.brandonlondontv.com/uploads/5/4/7/5/54754123/8018075.jpg"
    },
    {
        title: "L'Etage Magazine - Catches Clinic by Brandon London  - May 19, 2015",
        link: "http://www.letagemagazine.com/catches-clinic-by-brandon-london/",
        image: "http://www.brandonlondontv.com/uploads/5/4/7/5/54754123/7760789.jpg"
    },
    {
        title: "Montreal Gazette - The Snap: London's retirement caught Higgins by surprise - June 4, 2015",
        link: "http://montrealgazette.com/sports/football/cfl/montreal-alouettes/the-snap-londons-retirement-caught-higgins-by-surprise",
        image: "http://www.brandonlondontv.com/uploads/5/4/7/5/54754123/6353431.jpg"
    },
    {
        title: "Sports Media 101 - Ex-New York Giants WR Brandon London announces retirement from Football - June 5, 2015",
        link: "http://www.sportsmedia101.com/newyorkgiants/2015/06/05/ex-new-york-giants-wr-brandon-london-announces-his-retirement-from-football/",
        image: "http://www.brandonlondontv.com/uploads/5/4/7/5/54754123/6275422.jpg"
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