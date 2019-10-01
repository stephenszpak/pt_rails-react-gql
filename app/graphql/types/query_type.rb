module Types
  class QueryType < Types::BaseObject
    field :projects, [Types::ProjectType], null: false, description: 'Returns list of projects'

    def projects
      Project.preload(:user)
    end

    field :me, Types::UserType, null: true

    def me
      context[:current_user]
    end
  end
end
