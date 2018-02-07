class Blog < ApplicationRecord
    has_many :images, as: :imageable, dependent: :destroy
    serialize :content
end
