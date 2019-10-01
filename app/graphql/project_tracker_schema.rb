class ProjectTrackerSchema < GraphQL::Schema
  use GraphQL::Subscriptions::ActionCableSubscriptions
  use GraphQL::Batch

  mutation(Types::MutationType)
  query(Types::QueryType)
  subscription(Types::SubscriptionType)
end
