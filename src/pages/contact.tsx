import React, { useState } from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import DropDownSearch from '../components/dropdown-fieldset/index-new';

const PageContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 4rem 1rem;
`;

const PageTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #1f2937;
  margin-bottom: 1rem;
  text-align: center;
`;

const PageSubtitle = styled.p`
  font-size: 1.125rem;
  color: #6b7280;
  text-align: center;
  margin-bottom: 3rem;
`;

const ContactForm = styled.form`
  background: white;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  margin-bottom: 3rem;
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin-bottom: 1rem;
`;

const FormGroup = styled.div`
  label {
    display: block;
    font-weight: 500;
    color: #374151;
    margin-bottom: 0.5rem;
  }
  
  input, textarea, select {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #d1d5db;
    border-radius: 0.375rem;
    font-size: 0.875rem;
    transition: border-color 0.3s ease;
    
    &:focus {
      outline: none;
      border-color: #ea580c;
      box-shadow: 0 0 0 2px rgba(234, 88, 12, 0.1);
    }
  }
  
  textarea {
    resize: vertical;
    min-height: 120px;
  }
`;

const DropdownFormGroup = styled.div`
  margin-bottom: 1rem;
`;

const SubmitButton = styled.button`
  background-color: #ea580c;
  color: white;
  padding: 0.75rem 2rem;
  border: none;
  border-radius: 0.375rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 100%;
  
  &:hover {
    background-color: #dc2626;
  }
`;

const ContactInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const InfoCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const InfoIcon = styled.div`
  width: 3rem;
  height: 3rem;
  background-color: #ea580c;
  border-radius: 50%;
  margin: 0 auto 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

const InfoTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.5rem;
`;

const InfoText = styled.p`
  color: #6b7280;
  font-size: 0.875rem;
`;

// Options for the cooperation methods dropdown
const cooperationOptions = [
  { value: 'general', label: 'Tư vấn chung' },
  { value: 'restaurant', label: 'Đăng ký nhà hàng' },
  { value: 'support', label: 'Hỗ trợ kỹ thuật' },
  { value: 'feedback', label: 'Góp ý / Phản hồi' },
  { value: 'partnership', label: 'Hợp tác kinh doanh' },
  { value: 'advertising', label: 'Quảng cáo' },
  { value: 'media', label: 'Truyền thông' }
];

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubjectChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      subject: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.subject || !formData.message) {
      alert('Vui lòng điền đầy đủ thông tin bắt buộc!');
      return;
    }

    console.log('Form submitted:', formData);
    alert('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất có thể.');
    
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <Layout title="Contact Us - EatMap Food">
      <PageContainer>
        <PageTitle>Liên hệ hợp tác</PageTitle>
        <PageSubtitle>
          Để liên hệ hợp tác và quảng cáo, vui lòng điền vào biểu mẫu dưới đây
        </PageSubtitle>

        <ContactForm onSubmit={handleSubmit}>
          <FormGrid>
            <FormGroup>
              <label htmlFor="firstName">Tên *</label>
              <input 
                type="text" 
                id="firstName" 
                name="firstName" 
                value={formData.firstName}
                onChange={handleInputChange}
                required 
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="lastName">Họ *</label>
              <input 
                type="text" 
                id="lastName" 
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required 
              />
            </FormGroup>
          </FormGrid>

          <FormGrid>
            <FormGroup>
              <label htmlFor="email">Địa chỉ email *</label>
              <input 
                type="email" 
                id="email" 
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required 
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="phone">Số điện thoại</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </FormGroup>
          </FormGrid>

          <DropdownFormGroup>
            <DropDownSearch
              id="subject"
              name="subject"
              title="Phương thức hợp tác"
              list={cooperationOptions}
              value={formData.subject}
              onChange={handleSubjectChange}
              required={true}
              isSearch={true}
              size="lg"
            />
          </DropdownFormGroup>

          <FormGroup>
            <label htmlFor="message">Tin nhắn *</label>
            <textarea 
              id="message" 
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Hãy cho chúng tôi biết chúng tôi có thể hỗ trợ bạn như thế nào..."
              required
            />
          </FormGroup>

          <SubmitButton type="submit">
            Gửi tin nhắn
          </SubmitButton>
        </ContactForm>

        <ContactInfo>
          <InfoCard>
            <InfoIcon>
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </InfoIcon>
            <InfoTitle>Email</InfoTitle>
            <InfoText>eatmap.food@gmail.com</InfoText>
            <InfoText>support.eatmap.food@gmail.com</InfoText>
          </InfoCard>

          <InfoCard>
            <InfoIcon>
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </InfoIcon>
            <InfoTitle>Điện thoại</InfoTitle>
            <InfoText>+84 (0) 123-456-789</InfoText>
            <InfoText>T2-T6: 9:00-18:00</InfoText>
          </InfoCard>

          <InfoCard>
            <InfoIcon>
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </InfoIcon>
            <InfoTitle>Địa chỉ</InfoTitle>
            <InfoText>123 Đường Ẩm Thực</InfoText>
            <InfoText>Quận 1, TP. Hồ Chí Minh</InfoText>
          </InfoCard>
        </ContactInfo>
      </PageContainer>
    </Layout>
  );
};

export default Contact;
