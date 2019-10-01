module Mutations
  class AddProjectMutation < Mutations::BaseMutation
    argument :attributes, Types::ProjectAttributes, required: true

    field :project, Types::ProjectType, null: true
    field :errors, Types::ValidationErrorsType, null: true

    def resolve(attributes:)
      check_authentication!

      project = Project.new(attributes.to_h.merge(user: context[:current_user]))

      if project.save
        ProjectTrackerSchema.subscriptions.trigger('projectAdded', {}, project)
        { project: project }
      else
        { errors: project.errors }
      end
    end
  end
end
