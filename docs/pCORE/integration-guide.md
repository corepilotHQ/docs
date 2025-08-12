---
id: pcore-integration-guide
title: pCORE Integration Guide
description: Complete guide for developers to integrate pCORE into DeFi applications
sidebar_label: Integration Guide
sidebar_position: 2
---

# pCORE Integration Guide

This guide provides comprehensive instructions for developers to integrate pCORE into their DeFi applications, smart contracts, and protocols.

## Contract Information

- **pCORE Token Contract**: `[Contract Address - TBD]`
- **Network**: Core Blockchain (Chain ID: 1116)
- **Standards**: ERC20

## pCORE Interface

```js
interface IPCOREVault {
    /// @notice stake msg.value CORE, and receive pCORE
    function stake(address validator) external;

    /// @notice instant redeem
    function withdrawDirect(uint256 pCoreAmount, bool claim) external;

    /// @notice normal redeem
    function unbond(uint256 pCoreAmount, bool claim) external;

    /// @notice withdraw unlocked CORE after 1-day delay
    function withdraw() external;
}
```
