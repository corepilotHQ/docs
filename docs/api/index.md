---
id: api
title: API Documentation
description: Complete API documentation for Corepilot
sidebar_label: Overview
sidebar_position: 0
---

# Corepilot API Documentation

Welcome to the Corepilot API documentation. The Corepilot API is a powerful RESTful service designed to help CORE blockchain stakers optimize their staking strategies and maximize their rewards. Whether you're an individual staker, a DeFi protocol, or a financial application, our API provides the tools and data you need to make informed staking decisions.

### Key Features

- **Real-time APY Data**: Access current and projected Annual Percentage Yields for optimal staking timing
- **Staking Optimization**: Get intelligent recommendations for distributing your stakes across validators
- **Historical Analytics**: Analyze past performance trends to inform future staking strategies  
- **Multi-validator Support**: Compare and select from various validators to diversify your staking portfolio

### Who Should Use This API?

- **Individual Stakers**: Maximize your personal CORE staking rewards with data-driven insights
- **DeFi Protocols**: Integrate automated staking optimization into your yield farming strategies
- **Portfolio Management Tools**: Offer your users advanced CORE staking analytics and recommendations
- **Financial Applications**: Provide comprehensive CORE staking services to your customers

### Use Cases

- **Yield Optimization**: Automatically rebalance stakes when better opportunities arise
- **Risk Management**: Monitor validator performance and adjust distributions accordingly
- **Strategic Planning**: Use APY forecasts to plan staking strategies

## API Sections

### Authentication
Manage user authentication and token refresh.
- [Sign In / Sign Up](./auth/sign-in-sign-up)
- [Refresh Token](./auth/refresh-token)

### API Key Management
Create and manage your API keys for accessing the Corepilot services.
- [Create API Key](./api-key/create-api-key)
- [Get API Key List](./api-key/get-api-key-list)

### Subscription Plans
Manage your subscription plans and user subscriptions.
- [Get Subscription Plans](./subscription/get-subscription-plans)
- [Subscribe](./subscription/subscribe)
- [Get User Plan](./subscription/get-user-plan)

### APY Information
Access Annual Percentage Yield (APY) information for staking rewards.
- [Get Current Round APY](./apy/get-current-round-apy)
- [Get Next Round APY](./apy/get-next-round-apy)
- [Optimize staking distribution](./apy/optimize-staking-distribution)

### Historical Data
Retrieve historical APR (Annual Percentage Rate) data.
- [Get APR History Statistics](./history/get-apr-history-statistics)
- [Get APR History Statistics by Validator Address](./history/get-apr-history-statistics-by-validator-address)

<!-- ## Getting Started

1. **Authentication**: Start by signing in to get your access token
2. **API Key**: Create an API key for programmatic access
3. **Subscription**: Choose and subscribe to a plan that fits your needs
4. **Start Using**: Begin making requests to access APY and historical data -->

## Base URL

All API endpoints are relative to the base URL: `https://api.corepilot.finance`

## Rate Limiting

API rate limits depend on your subscription plan. Please refer to your subscription details for specific limits. 
