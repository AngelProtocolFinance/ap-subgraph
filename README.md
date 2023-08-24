# AngelProtocol Subgraph

## Getting Started

### Install Graph CLI

You can install Graph CLI with either npm or yarn.

*Note: You need version 0.21.0 or above*

**npm:**
```
npm install -g @graphprotocol/graph-cli
```
**Yarn:**
```
yarn global add @graphprotocol/graph-cli
```

### Clone the repository

```
git clone git@github.com:AngelProtocolFinance/ap-subgraph.git
```

### 4. Enter subgraph

```
cd ap-subgraph
```

### Install packages

**npm:**
```
npm install
```
**Yarn:**
```
yarn install
```

### Auth & Deploy

Authenticate within the CLI, build and deploy your subgraph to the Studio.

#### 1. Connect with AP Team 1 wallet in your Metamask browser extension

Contact someone from the team to get the Private Key.

#### 2. Get the DEPLOY_KEY

You will need your Deploy Key to deploy your subgraph from the CLI. 

Open https://thegraph.com/studio/, connect your wallet and copy the *DEPLOY KEY*

#### 3. Authenticate in CLI

*Note: DEPLOY_KEY is the value you copied in the previous step*

```
graph auth --studio DEPLOY_KEY
```

#### 4. Build subgraph

```
yarn codegen && yarn build
```

#### 5. Deploy subgraph

```
yarn deploy
```


