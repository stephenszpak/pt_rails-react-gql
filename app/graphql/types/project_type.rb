module Types
  class ProjectType < Types::BaseObject
    field :id, ID, null: false
    field :title, String, null: false
    field :description, String, null: true
    field :is_completed, Boolean, null: true

    field :user, Types::UserType, null: false
  end
end
