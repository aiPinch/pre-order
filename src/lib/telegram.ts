// Telegram Bot API configuration
const BOT_TOKEN = "8592296122:AAFZHSEnTLbi_jfpjtT2Tveg7178jYPBps0";
const CHAT_ID = "534271654";

// Format timestamp
const formatTimestamp = (): string => {
  return new Date().toLocaleString('ru-RU', {
    timeZone: 'Europe/Moscow',
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

// Send message to Telegram
const sendToTelegram = async (message: string): Promise<void> => {
  try {
    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
    await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
        parse_mode: 'HTML',
      }),
    });
  } catch (error) {
    console.error('Failed to send to Telegram:', error);
  }
};

// Log early access form submission
export const logFormSubmission = async (
  type: 'form_submit_early_access' | 'form_submit_preorder',
  data: { name: string; contact: string }
): Promise<void> => {
  const typeLabel = type === 'form_submit_preorder' ? '💳 Предзаказ' : '📝 Ранний доступ';
  
  const message = `${typeLabel}

👤 <b>Имя:</b> ${data.name}
📧 <b>Контакт:</b> ${data.contact}
🕐 <b>Время:</b> ${formatTimestamp()}`;

  await sendToTelegram(message);
};

// Log contact message
export const logContactMessage = async (data: {
  name: string;
  contact: string;
  message: string;
}): Promise<void> => {
  const message = `💬 Сообщение

👤 <b>Имя:</b> ${data.name}
📧 <b>Контакт:</b> ${data.contact}
🕐 <b>Время:</b> ${formatTimestamp()}

📝 <b>Сообщение:</b>
${data.message}`;

  await sendToTelegram(message);
};

// Keep these exports for compatibility but make them no-ops
export const logButtonClick = async (): Promise<void> => {};
export const logSessionStart = (): void => {};
export const logSessionEnd = async (): Promise<void> => {};
export const getUserId = (): string => '';
