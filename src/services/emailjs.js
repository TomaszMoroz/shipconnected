import emailjs from '@emailjs/browser'

// Konfiguracja EmailJS
const EMAILJS_CONFIG = {
  publicKey: 'YpY_iXODL6CePqBSM',
  serviceId: 'service_dl2cnh8',
  templateId: 'template_dyeoe1x',
}

// Inicjalizacja EmailJS
export const initEmailJS = () => {
  emailjs.init(EMAILJS_CONFIG.publicKey)
}

// Wysyłanie formularza aplikacji o pracę
export const sendJobApplication = async (formData) => {
  try {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      position: formData.position,
      profession: formData.profession,
      experience: formData.experience,
      extraEducation: formData.extraEducation,
      skills: formData.skills,
      languages: formData.languages,
      city: formData.city,
      street: formData.street,
      postcode: formData.postcode,
      birthdate: formData.birthdate,
      education: formData.education,
      schoolName: formData.schoolName,
      schoolYear: formData.schoolYear,
      specialty: formData.specialty,
      title: formData.title,
      computer: formData.computer,
      applicationSource: formData.applicationSource,
      other: formData.other,
      to_email: 'rekrutacja@shipconnected.com',
    }

    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      templateParams,
    )

    return { success: true, data: response }
  } catch (error) {
    console.error('Email sending failed:', error)
    return { success: false, error: error.text || 'Wystąpił błąd podczas wysyłania' }
  }
}
