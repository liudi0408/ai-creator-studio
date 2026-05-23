// 支付配置 - 使用柠檬买单（LemonSqueezy）或面包多等国内支付方案
// 也可以用微信支付直连

export const PAYMENT_CONFIG = {
  // 方案1: 面包多（最简单，无需企业资质）
  // 注册地址: https://mianbaoduo.com
  mianbaoduo: {
    enabled: true,
    proMonthly: {
      name: 'AI灵感工坊 Pro月付',
      price: 29,
      link: 'https://mianbaoduo.com/product/xxx', // 上架后填入
    },
    proYearly: {
      name: 'AI灵感工坊 Pro年付',
      price: 199,
      link: 'https://mianbaoduo.com/product/xxx', // 上架后填入
    },
  },

  // 方案2: 爱发卡（自动发卡，适合虚拟商品）
  aifaka: {
    enabled: false,
    apiUrl: 'https://api.aifaka.com',
    apiKey: '', // 注册后填入
  },

  // 方案3: 微信支付直连（需要企业资质）
  wechat: {
    enabled: false,
    appId: '',
    mchId: '',
    apiKey: '',
    notifyUrl: '/api/payment/wechat-notify',
  },
};

export const PLANS = {
  free: {
    name: '免费版',
    price: 0,
    dailyLimit: 3,
    features: ['每日3次免费生成', '全部工具可用', '基础模板'],
  },
  pro_monthly: {
    name: 'Pro月付',
    price: 29,
    dailyLimit: Infinity,
    features: ['无限次生成', '全部工具可用', '高级模板 & 风格', '优先生成速度', '历史记录保存'],
    paymentLink: PAYMENT_CONFIG.mianbaoduo.proMonthly.link,
  },
  pro_yearly: {
    name: 'Pro年付',
    price: 199,
    dailyLimit: Infinity,
    features: ['同Pro全部功能', '省43%（≈16.6元/月）', '优先客服'],
    paymentLink: PAYMENT_CONFIG.mianbaoduo.proYearly.link,
    badge: '最划算',
  },
};
