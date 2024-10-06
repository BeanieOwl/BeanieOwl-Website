import { Markdown } from '../../components/markdown';

export const metadata = {
    title: 'Privacy Policy'
};

// This is where you can write your privacy policy content in Markdown format
const privacyPolicyContent = `

### Introduction
We value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and protect your data when you use our app.

### Information We Collect
- **Shop Information**: We collect data about your Shopify store, such as your store name, domain, and Shopify store ID. This information is necessary to provide you with our services.
- **Customer Information**: We do not collect personal information from your customers, but we may process some data related to store interactions.
- **Usage Information**: We collect data on how you use our app to improve the service, including error reports and feature usage.

### How We Use Your Information
We use the data we collect for:
- Providing and improving our services.
- Responding to your inquiries and support requests.
- Monitoring your usage and customizing your experience.
- Ensuring compliance with legal obligations.

### Data Sharing and Security
- We **do not** sell or share your data with third parties.
- We may share data with trusted third-party services (e.g., cloud services) necessary for running our app.
- We implement secure protocols to protect your data.

### Your Rights
You have the right to:
- Access, update, or delete your data.
- Contact us to learn more about how your data is being used.

### Changes to This Privacy Policy
We may update this Privacy Policy from time to time. If we make significant changes, we will notify you through your account or by email.

### Contact Us
If you have any questions about this Privacy Policy, you can contact us at:
- Email: beanieowl.dev@gmail.com
`;

export default async function Page() {
    return (
        <>
            <h1>Privacy Policy</h1>
            <Markdown content={privacyPolicyContent} />
        </>
    );
}
