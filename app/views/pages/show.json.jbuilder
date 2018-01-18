json.array! @page.links do |link|
    json.title link.title
    json.link link.link
    json.image link.images.first.image
end