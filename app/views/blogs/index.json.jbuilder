json.array! @blogs.each do |blog|
    json.id blog.id
    json.title blog.content[0][1]
    json.subtitle blog.content[1][1]
    json.image blog.content[2][1]
    json.blurb blog.content[4][1].split(" ")[0..50].join(" ") + " [...]"
    json.date blog.created_at
end

