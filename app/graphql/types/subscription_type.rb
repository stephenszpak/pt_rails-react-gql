module Types
  class SubscriptionType < GraphQL::Schema::Object
    field :project_added, Types::ProjectType, null: false, description: 'A project was added'
    field :project_updated, Types::ProjectType, null: false, description: 'existing project was updated'

    def project_added; end
    def project_updated; end
  end
end
