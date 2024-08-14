import TonWeb from 'tonweb';

const tonweb = new TonWeb(new TonWeb.HttpProvider('https://toncenter.com/api/v2/jsonRPC'));

export async function getWalletBalance(address) {
  try {
    const balance = await tonweb.getBalance(address);
    return TonWeb.utils.fromNano(balance);
  } catch (error) {
    console.error('Error fetching wallet balance:', error);
    return null;
  }
}

export async function sendReward(fromAddress, toAddress, amount) {
  // Implementation for sending rewards will be added
  console.log(`Sending ${amount} TON from ${fromAddress} to ${toAddress}`);
}

// Additional TON-related functions will be implemented here
