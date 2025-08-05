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
- **Standards**: ERC20 and ERC4626 compatible

## pCORE Interface

pCORE implements the standard ERC4626 tokenized vault interface for maximum compatibility:

```js
interface IPCOREVault {
    // ============ Asset Information ============

    /// @notice Returns the underlying asset token (WCORE)
    function asset() external view returns (address);

    /// @notice Returns total assets under management
    function totalAssets() external view returns (uint256);

    // ============ Share Conversion ============

    /// @notice Convert assets to shares using current exchange rate
    function convertToShares(uint256 assets) external view returns (uint256);

    /// @notice Convert shares to assets using current exchange rate
    function convertToAssets(uint256 shares) external view returns (uint256);

    // ============ Deposit Functions ============

    /// @notice Maximum assets that can be deposited for receiver
    function maxDeposit(address receiver) external view returns (uint256);

    /// @notice Preview shares received for assets deposit
    function previewDeposit(uint256 assets) external view returns (uint256);

    /// @notice Deposit assets WCORE and mint shares to receiver
    function deposit(uint256 assets, address receiver) external returns (uint256);

    /// @notice Deposit msg.value CORE and mint shares to receiver
    function nativeDeposit(address receiver) external returns (uint256);

    /// @notice Maximum shares that can be minted for receiver
    function maxMint(address receiver) external view returns (uint256);

    /// @notice Preview assets needed to mint shares
    function previewMint(uint256 shares) external view returns (uint256);

    /// @notice Mint exact shares to receiver, transfer WCORE from user to pCORE contract
    function mint(uint256 shares, address receiver) external returns (uint256);

    // ============ Withdraw Functions ============

    /// @notice Maximum assets that can be withdrawn by owner
    function maxWithdraw(address owner) external view returns (uint256);

    /// @notice Preview shares burned for assets withdrawal
    function previewWithdraw(uint256 assets) external view returns (uint256);

    /// @notice Withdraw assets by burning shares
    function withdraw(uint256 assets, address receiver, address owner) external returns (uint256);

    /// @notice Maximum shares that can be redeemed by owner
    function maxRedeem(address owner) external view returns (uint256);

    /// @notice Preview assets received for shares redemption
    function previewRedeem(uint256 shares) external view returns (uint256);

    /// @notice Redeem shares for assets
    function redeem(uint256 shares, address receiver, address owner) external returns (uint256);

    /// @notice Instant redeem shares for assets, if user wants to receive CORE, isNative should be true, and if user wants to receive WCORE, isNative should be false
    function instantRedeem(uint256 shares, address receiver, address owner, bool isNative) external; 

    /// @notice Claim withdrawals after unlock period, if user wants to receive CORE, isNative should be true, and if user wants to receive WCORE, isNative should be false
    function claimWithdrawals(address owner, bool isNative) external;
}
```
<!-- 
## pCORE ABI

```js
[
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "isNative",
          "type": "bool"
        }
      ],
      "name": "claimWithdrawals",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "assets",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "receiver",
          "type": "address"
        }
      ],
      "name": "deposit",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "shares",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "receiver",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "isNative",
          "type": "bool"
        }
      ],
      "name": "instantRedeem",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "shares",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "receiver",
          "type": "address"
        }
      ],
      "name": "mint",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "receiver",
          "type": "address"
        }
      ],
      "name": "nativeDeposit",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "shares",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "receiver",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "nativeRedeem",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "shares",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "receiver",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "redeem",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "assets",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "receiver",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "withdraw",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
  ]
``` -->
