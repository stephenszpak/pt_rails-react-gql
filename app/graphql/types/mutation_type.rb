module Types
  class MutationType < Types::BaseObject
    field :sign_in, mutation: Mutations::SignInMutation

    field :add_project, mutation: Mutations::AddProjectMutation
    field :update_project, mutation: Mutations::UpdateProjectMutation
  end
end
