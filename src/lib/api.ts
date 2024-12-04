import emailjs from '@emailjs/browser';
import { EMAIL_CONFIG } from './config';

interface FormData {
  industry: string;
  customIndustry?: string;
  businessName: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  submittedAt: string;
}

interface EmailResponse {
  success: boolean;
  message: string;
}

export async function sendEmail(data: FormData): Promise<EmailResponse> {
  try {
    const templateParams = {
      from_name: `${data.firstName} ${data.lastName}`,
      business_name: data.businessName,
      industry: data.customIndustry || data.industry,
      phone: data.phoneNumber,
      email: data.email,
      submission_time: new Date(data.submittedAt).toLocaleString(),
    };

    const result = await emailjs.send(
      EMAIL_CONFIG.SERVICE_ID,
      EMAIL_CONFIG.TEMPLATE_ID,
      templateParams,
      EMAIL_CONFIG.PUBLIC_KEY
    );

    if (result.status === 200) {
      return { success: true, message: 'Form submitted successfully' };
    } else {
      throw new Error('Failed to send email');
    }
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      success: false,
      message: 'Failed to submit form. Please try again.'
    };
  }
}