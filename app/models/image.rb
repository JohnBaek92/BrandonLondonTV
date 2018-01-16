# == Schema Information
#
# Table name: images
#
#  id                 :integer          not null, primary key
#  imageable_type     :string
#  imageable_id       :integer
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#

class Image < ApplicationRecord

    has_attached_file :image


    validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/
end
