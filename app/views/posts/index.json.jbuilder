json.array! @posts do |post|
    json.id post.id
    json.title post.title
    json.body post.body
    json.images post.images do |image|
        json.image image.image
    end

end