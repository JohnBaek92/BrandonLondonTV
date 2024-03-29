class CreateImages < ActiveRecord::Migration[5.0]
  def change
    create_table :images do |t|
      t.references :imageable, polymorphic: true, index: true
      t.attachment :image
      t.timestamps
    end
  end
end
