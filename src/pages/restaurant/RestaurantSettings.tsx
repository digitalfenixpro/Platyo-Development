import React, { useState, useEffect } from 'react';
import { Save, Globe, Clock, Truck, QrCode, Palette, Bell, MapPin, HelpCircle, Send, Eye, Calendar, Mail, Phone, Building, Store, Megaphone, Upload, Image as ImageIcon, FileText, DollarSign, Star, ChevronDown } from 'lucide-react';
import { colombianDepartments, colombianCitiesByDepartment, validateNIT, formatNIT } from '../../utils/colombianCities';
import { Restaurant } from '../../types';
import { loadFromStorage, saveToStorage } from '../../data/mockData';
import { useAuth } from '../../contexts/AuthContext';
import { useLanguage } from '../../contexts/LanguageContext';
import { useToast } from '../../hooks/useToast';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Badge } from '../../components/ui/Badge';
import { Modal } from '../../components/ui/Modal';

export const RestaurantSettings: React.FC = () => {
  const { restaurant, user } = useAuth();
  const { showToast } = useToast();
  const { t, setLanguage } = useLanguage();
  const [activeTab, setActiveTab] = useState('general');
  const [formData, setFormData] = useState<Restaurant | null>(null);
  const [loading, setLoading] = useState(false);
  const [supportForm, setSupportForm] = useState({
    subject: '',
    priority: 'medium',
    category: 'general',
    message: '',
    contactEmail: '',
    contactPhone: ''
  });
  const [supportLoading, setSupportLoading] = useState(false);
  const [supportSuccess, setSupportSuccess] = useState(false);
  const [supportTickets, setSupportTickets] = useState<any[]>([]);
  const [selectedTicket, setSelectedTicket] = useState<any>(null);
  const [showTicketDetailModal, setShowTicketDetailModal] = useState(false);

  useEffect(() => {
    const existingTickets = loadFromStorage('supportTickets', []);
    setSupportTickets(existingTickets);

    if (restaurant) {
      setSupportForm(prev => ({
        ...prev,
        contactEmail: restaurant.email || '',
        contactPhone: restaurant.phone || ''
      }));
    }
  }, [restaurant]);

  useEffect(() => {
    if (restaurant) {
      const defaultTheme = {
        primary_color: '#dc2626',
        secondary_color: '#f3f4f6',
        menu_background_color: '#ffffff',
        card_background_color: '#f9fafb',
        primary_text_color: '#111827',
        secondary_text_color: '#6b7280',
        accent_color: '#16a34a',
        text_color: '#1f2937',
        primary_font: 'Inter',
        secondary_font: 'Poppins',
        font_sizes: {
          title: '32px',
          subtitle: '24px',
          normal: '16px',
          small: '14px',
        },
        font_weights: {
          light: 300,
          regular: 400,
          medium: 500,
          bold: 700,
        },
        button_style: 'rounded' as const,
      };

      setFormData({
        ...restaurant,
        settings: {
          ...restaurant.settings,
          theme: {
            ...defaultTheme,
            ...restaurant.settings.theme,
            font_sizes: {
              ...defaultTheme.font_sizes,
              ...(restaurant.settings.theme.font_sizes || {}),
            },
            font_weights: {
              ...defaultTheme.font_weights,
              ...(restaurant.settings.theme.font_weights || {}),
            },
          },
          promo: restaurant.settings.promo || {
            enabled: false,
            banner_image: '',
            promo_text: '',
            cta_text: 'Ver Ofertas',
            cta_link: '',
          },
          billing: restaurant.settings.billing || {
            nombreComercial: restaurant.name || '',
            razonSocial: '',
            nit: '',
            direccion: restaurant.address || '',
            departamento: 'Cundinamarca',
            ciudad: 'Bogotá D.C.',
            telefono: restaurant.phone || '',
            correo: restaurant.email || '',
            regimenTributario: 'simple' as const,
            responsableIVA: false,
            tieneResolucionDIAN: false,
            numeroResolucionDIAN: '',
            fechaResolucion: '',
            rangoNumeracionDesde: undefined,
            rangoNumeracionHasta: undefined,
            aplicaPropina: true,
            mostrarLogoEnTicket: false,
            logoTicket: '',
            mensajeFinalTicket: '',
          },
        },
      });
    }
  }, [restaurant]);

  const handleSave = async () => {
    if (!formData || !restaurant) return;

    setLoading(true);
    try {
      const restaurants = loadFromStorage('restaurants', []);
      const updatedRestaurants = restaurants.map((r: Restaurant) =>
        r.id === restaurant.id
          ? { ...formData, updated_at: new Date().toISOString() }
          : r
      );

      saveToStorage('restaurants', updatedRestaurants);

      const currentAuth = loadFromStorage('currentAuth', null);
      if (currentAuth) {
        currentAuth.restaurant = { ...formData, updated_at: new Date().toISOString() };
        saveToStorage('currentAuth', currentAuth);
      }

      showToast(
        'success',
        t('config_saved_title'),
        t('changes_saved_success'),
        4000
      );
    } catch (error) {
      showToast(
        'error',
        'Error',
        'Hubo un problema al guardar la configuración.',
        4000
      );
    } finally {
      setLoading(false);
    }
  };

  const updateFormData = (path: string, value: any) => {
    if (!formData) return;

    const keys = path.split('.');
    const newData = { ...formData };
    let current: any = newData;

    for (let i = 0; i < keys.length - 1; i++) {
      if (!current[keys[i]]) {
        current[keys[i]] = {};
      }
      current = current[keys[i]];
    }

    current[keys[keys.length - 1]] = value;
    setFormData(newData);
  };

  const handleSupportSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSupportLoading(true);

    try {
      const newTicket = {
        id: `ticket-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        restaurantId: restaurant?.id,
        restaurantName: restaurant?.name,
        subject: supportForm.subject,
        category: supportForm.category,
        priority: supportForm.priority,
        message: supportForm.message,
        contactEmail: supportForm.contactEmail,
        contactPhone: supportForm.contactPhone,
        status: 'pending',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      const existingTickets = loadFromStorage('supportTickets', []);
      saveToStorage('supportTickets', [...existingTickets, newTicket]);

      console.log('Ticket de soporte creado:', newTicket);

      setSupportSuccess(true);
      
      setTimeout(() => {
        setSupportForm({
          subject: '',
          priority: 'medium',
          category: 'general',
          message: '',
          contactEmail: restaurant?.email || '',
          contactPhone: restaurant?.phone || ''
        });
        setSupportSuccess(false);
      }, 3000);
      
      setSupportTickets(prev => [...prev, newTicket]);

    } catch (error) {
      console.error('Error sending support request:', error);
      showToast(
        'error',
        'Error',
        'Hubo un problema al enviar la solicitud de soporte.',
        4000
      );
    } finally {
      setSupportLoading(false);
    }
  };

  const handleViewTicketDetails = (ticket: any) => {
    setSelectedTicket(ticket);
    setShowTicketDetailModal(true);
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'pending':
        return <Badge variant="warning">{t('status_pending')}</Badge>;
      case 'in_progress':
        return <Badge variant="info">{t('status_in_progress')}</Badge>;
      case 'resolved':
        return <Badge variant="success">{t('status_resolved')}</Badge>;
      case 'closed':
        return <Badge variant="gray">{t('status_closed_simple')}</Badge>;
      default:
        return <Badge variant="gray">Desconocido</Badge>;
    }
  };

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'urgent':
        return <Badge variant="error">{t('priority_urgent')}</Badge>;
      case 'high':
        return <Badge variant="warning">{t('priority_high')}</Badge>;
      case 'medium':
        return <Badge variant="info">{t('priority_medium')}</Badge>;
      case 'low':
        return <Badge variant="gray">{t('priority_low')}</Badge>;
      default:
        return <Badge variant="gray">{t('priority_medium')}</Badge>;
    }
  };

  const getCategoryName = (category: string) => {
    const categories: { [key: string]: string } = {
      general: 'Consulta General',
      technical: 'Problema Técnico',
      billing: 'Facturación',
      feature: 'Solicitud de Función',
      account: 'Cuenta y Configuración',
      other: 'Otro'
    };
    return categories[category] || category;
  };

  const tabs = [
    { id: 'general', name: t('restaurantSettings.tabs.general'), icon: Globe },
    { id: 'hours', name: t('restaurantSettings.tabs.hours'), icon: Clock },
    { id: 'social', name: t('restaurantSettings.tabs.social'), icon: Globe },
    { id: 'delivery', name: t('restaurantSettings.tabs.delivery'), icon: Truck },
    { id: 'tables', name: t('restaurantSettings.tabs.tables'), icon: QrCode },
    { id: 'promo', name: t('restaurantSettings.tabs.promo'), icon: Megaphone },
    { id: 'theme', name: t('restaurantSettings.tabs.theme'), icon: Palette },
    { id: 'billing', name: t('restaurantSettings.tabs.billing'), icon: FileText },
    { id: 'support', name: t('restaurantSettings.tabs.support'), icon: HelpCircle },
  ];

  if (!formData) {
    return (
      <div className="p-6">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>
          <div className="h-64 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 md:p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-4 md:mb-6">
        <h1 className="text-xl md:text-2xl font-bold text-gray-900">{t('settings')}</h1>
        <Button
          onClick={handleSave}
          loading={loading}
          icon={Save}
          className="w-full sm:w-auto"
        >
          {t('save')} {t('settings')}
        </Button>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="border-b border-gray-200">
          <div className="block md:hidden px-4 py-3">
            <div className="relative">
              <select
                value={activeTab}
                onChange={(e) => setActiveTab(e.target.value)}
                className="w-full appearance-none bg-white border border-gray-300 rounded-lg px-4 py-3 pr-10 text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {tabs.map((tab) => (
                  <option key={tab.id} value={tab.id}>
                    {tab.name}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>
          </div>

          <nav className="hidden md:flex md:space-x-4 lg:space-x-8 px-4 lg:px-6 overflow-x-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-2 lg:px-1 border-b-2 font-medium text-xs lg:text-sm flex items-center gap-1.5 lg:gap-2 whitespace-nowrap flex-shrink-0 ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
                  {tab.name}
                </button>
              );
            })}
          </nav>
        </div>

        <div className="p-4 md:p-6">
          {activeTab === 'general' && (
            <div className="space-y-6">
              <div className="bg-white rounded-xl md:rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-4 md:px-6 py-3 md:py-4 border-b border-gray-200">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-md">
                      <ImageIcon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-base md:text-lg font-bold text-gray-900">{t('restaurantSettings.general.visual_identity_title')}</h3>
                      <p className="text-sm text-gray-600">{t('restaurantSettings.general.logo_subtitle')}</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 md:p-6">
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6">
                    <div className="flex-shrink-0">
                      <div className="relative group">
                        <div className="w-32 h-32 md:w-40 md:h-40 rounded-xl md:rounded-2xl border-2 md:border-4 border-gray-100 shadow-xl bg-gradient-to-br from-gray-50 to-white overflow-hidden flex items-center justify-center transition-transform group-hover:scale-105">
                          {formData.logo ? (
                            <img
                              src={formData.logo}
                              alt="Logo"
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="text-center p-2 md:p-4">
                              <Store className="w-12 h-12 md:w-16 md:h-16 text-gray-300 mx-auto mb-2" />
                              <p className="text-xs text-gray-400 font-medium">{t('restaurantSettings.general.no_logo')}</p>
                            </div>
                          )}
                        </div>
                        {formData.logo && (
                          <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex-1 w-full">
                      <div className="space-y-4">
                        <div className="flex flex-col sm:flex-row flex-wrap gap-3">
                          <label className="relative cursor-pointer flex-1 min-w-[200px]">
                            <input
                              type="file"
                              accept="image/*"
                              onChange={(e) => {
                                const file = e.target.files?.[0];
                                if (file) {
                                  if (file.size > 5 * 1024 * 1024) {
                                    showToast('error', t('restaurantSettings.general.file_too_large_title'), t('restaurantSettings.general.max_size_5mb_error'), 3000);
                                    return;
                                  }
                                  const reader = new FileReader();
                                  reader.onloadend = () => {
                                    updateFormData('logo', reader.result as string);
                                  };
                                  reader.readAsDataURL(file);
                                }
                              }}
                              className="hidden"
                              id="logo-upload"
                            />
                            <span className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl text-sm font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all shadow-md hover:shadow-lg">
                              <Upload className="w-4 h-4 mr-2" />
                              {formData.logo ? t('restaurantSettings.general.change_logo_button') : t('restaurantSettings.general.upload_logo_button')}
                            </span>
                          </label>

                          {formData.logo && (
                            <button
                              onClick={() => updateFormData('logo', '')}
                              className="inline-flex items-center px-6 py-3 bg-red-50 border-2 border-red-200 rounded-xl text-sm font-semibold text-red-700 hover:bg-red-100 hover:border-red-300 transition-all"
                            >
                              {t('restaurantSettings.general.delete_button')}
                            </button>
                          )}
                        </div>

                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-100">
                          <div className="flex items-start gap-3">
                            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div className="flex-1">
                              <p className="text-sm font-semibold text-gray-900 mb-2">{t('restaurantSettings.general.recommended_specs_title')}</p>
                              <ul className="space-y-1.5 text-xs text-gray-700">
                                <li className="flex items-center gap-2">
                                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                                  {t('restaurantSettings.general.accepted_formats_list')}
                                </li>
                                <li className="flex items-center gap-2">
                                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                                  {t('restaurantSettings.general.optimal_dimensions_list')}
                                </li>
                                <li className="flex items-center gap-2">
                                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                                  {t('restaurantSettings.general.max_size_list')}
                                </li>
                                <li className="flex items-center gap-2">
                                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                                  {t('restaurantSettings.general.prefer_transparent_bg_list')}
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl md:rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-4 md:px-6 py-3 md:py-4 border-b border-gray-200">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-md">
                      <Store className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-base md:text-lg font-bold text-gray-900">{t('restaurantInfo')}</h3>
                      <p className="text-sm text-gray-600">{t('restaurantSettings.general.contact_location_subtitle')}</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 md:p-6 space-y-4 md:space-y-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                        <Building className="w-4 h-4 text-gray-500" />
                        {t('restaurantName')} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => updateFormData('name', e.target.value)}
                        className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all font-medium"
                        placeholder={t('restaurantName')}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                        <Mail className="w-4 h-4 text-gray-500" />
                        {t('email')}
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => updateFormData('email', e.target.value)}
                        className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all"
                        placeholder={t('emailPlaceholder')}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                        <Phone className="w-4 h-4 text-gray-500" />
                        {t('phone')} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        value={formData.phone || ''}
                        onChange={(e) => updateFormData('phone', e.target.value)}
                        className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all font-medium"
                        placeholder={t('restaurantSettings.general.whatsapp_placeholder')}
                      />
                      <p className="text-xs text-gray-500 mt-2 flex items-center gap-1">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                        {t('restaurantSettings.general.required_for_whatsapp')}
                      </p>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-gray-500" />
                        {t('address')}
                      </label>
                      <input
                        type="text"
                        value={formData.address || ''}
                        onChange={(e) => updateFormData('address', e.target.value)}
                        className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all"
                        placeholder={t('restaurantSettings.general.address_placeholder')}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                      <FileText className="w-4 h-4 text-gray-500" />
                      {t('description')}
                    </label>
                    <textarea
                      value={formData.description || ''}
                      onChange={(e) => updateFormData('description', e.target.value)}
                      rows={4}
                      className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all resize-none"
                      placeholder={t('restaurantSettings.general.description_placeholder')}
                    />
                    <p className="text-xs text-gray-500 mt-2">{t('restaurantSettings.general.max_500_chars_hint')}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl md:rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-4 md:px-6 py-3 md:py-4 border-b border-gray-200">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center shadow-md">
                      <Globe className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-base md:text-lg font-bold text-gray-900">{t('regionalSettings')}</h3>
                      <p className="text-sm text-gray-600">{t('restaurantSettings.general.language_currency_subtitle')}</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 md:p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg md:rounded-xl p-4 md:p-5 border-2 border-purple-100">
                      <label className="block text-sm font-semibold text-gray-900 mb-3">
                        {t('language')}
                      </label>
                      <select
                        value={formData.settings.language || 'es'}
                        onChange={(e) => {
                          updateFormData('settings.language', e.target.value);
                          setLanguage(e.target.value as 'es' | 'en');
                        }}
                        className="w-full px-4 py-3 bg-white border-2 border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all font-medium"
                      >
                        <option value="es">{t('restaurantSettings.general.language_es_option')}</option>
                        <option value="en">{t('restaurantSettings.general.language_en_option')}</option>
                      </select>
                      <p className="text-xs text-gray-600 mt-2">
                        {t('restaurantSettings.general.language_selector_hint')}
                      </p>
                    </div>

                    <div className="bg-gradient-to-br from-purple-50 to-purple-50 rounded-xl p-5 border-2 border-purple-100">
                      <label className="block text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <DollarSign className="w-4 h-4" />
                        {t('currency')}
                      </label>
                      <select
                        value={formData.settings.currency || 'COP'}
                        onChange={(e) => updateFormData('settings.currency', e.target.value)}
                        className="w-full px-4 py-3 bg-white border-2 border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all font-medium"
                      >
                        <option value="COP">{t('restaurantSettings.general.currency_cop_option')}</option>
                        <option value="USD">{t('restaurantSettings.general.currency_usd_option')}</option>
                        <option value="EUR">{t('restaurantSettings.general.currency_eur_option')}</option>
                        <option value="MXN">{t('restaurantSettings.general.currency_mxn_option')}</option>
                        <option value="ARS">{t('restaurantSettings.general.currency_ars_option')}</option>
                        <option value="CLP">{t('restaurantSettings.general.currency_clp_option')}</option>
                        <option value="PEN">{t('restaurantSettings.general.currency_pen_option')}</option>
                      </select>
                      <p className="text-xs text-gray-600 mt-2">
                        {t('restaurantSettings.general.currency_selector_hint')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-100 p-6">
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-md flex-shrink-0">
                    <Globe className="w-6 h-6 text-white" />
                  </div>

                  <div className="flex-1 w-full">
                    <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2">Menú Público</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Comparte este enlace con tus clientes para que puedan ver tu menú y realizar pedidos
                    </p>

                    <div className="bg-white rounded-lg p-4 border border-green-200 w-full">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                        <div className="flex-1 min-w-0">
                          <p className="text-xs text-gray-500 mb-1">Tu URL personalizada:</p>
                          <p className="text-sm font-mono text-gray-900 truncate">
                            {window.location.origin}/{formData.domain}
                          </p>
                        </div>

                        <div className="flex flex-wrap gap-2 w-full sm:w-auto justify-start sm:justify-end">
                          <button
                            onClick={() => {
                              navigator.clipboard.writeText(`${window.location.origin}/${formData.domain}`);
                              showToast('success', 'Copiado', 'URL copiada al portapapeles', 2000);
                            }}
                            className="px-3 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors w-full sm:w-auto"
                          >
                            Copiar
                          </button>

                          <a
                            href={`${window.location.origin}/${formData.domain}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-3 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 transition-colors w-full sm:w-auto"
                          >
                            <Eye className="w-4 h-4 mr-2" />
                            Ver Menú
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'support' && (
            <div className="space-y-4 md:space-y-6">
              <div className="text-center mb-4 md:mb-6">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-md mx-auto mb-3 md:mb-4">
                  <HelpCircle className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">Centro de Soporte</h3>
                <p className="text-gray-600">
                  ¿Necesitas ayuda? Completa el formulario y nuestro equipo te contactará pronto.
                </p>
              </div>

              {supportSuccess && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-3 md:p-4 mb-4 md:mb-6">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="text-green-800 font-medium">¡Solicitud enviada!</h4>
                      <p className="text-green-700 text-sm">
                        Tu solicitud de soporte ha sido enviada. Te contactaremos pronto.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSupportSubmit} className="space-y-4 md:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Asunto *
                    </label>
                    <input
                      type="text"
                      value={supportForm.subject}
                      onChange={(e) => setSupportForm(prev => ({ ...prev, subject: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder={t('restaurantSettings.support.subject_placeholder')}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Categoría
                    </label>
                    <select
                      value={supportForm.category}
                      onChange={(e) => setSupportForm(prev => ({ ...prev, category: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="general">Consulta General</option>
                      <option value="technical">Problema Técnico</option>
                      <option value="billing">Facturación</option>
                      <option value="feature">Solicitud de Función</option>
                      <option value="account">Cuenta y Configuración</option>
                      <option value="other">Otro</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Prioridad
                    </label>
                    <select
                      value={supportForm.priority}
                      onChange={(e) => setSupportForm(prev => ({ ...prev, priority: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="low">Baja - No es urgente</option>
                      <option value="medium">Media - Respuesta en 24-48h</option>
                      <option value="high">Alta - Respuesta en 2-8h</option>
                      <option value="urgent">Urgente - Respuesta inmediata</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email de Contacto *
                    </label>
                    <input
                      type="email"
                      value={supportForm.contactEmail}
                      onChange={(e) => setSupportForm(prev => ({ ...prev, contactEmail: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="info@email.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Teléfono de Contacto (Opcional)
                  </label>
                  <input
                    type="tel"
                    value={supportForm.contactPhone}
                    onChange={(e) => setSupportForm(prev => ({ ...prev, contactPhone: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Descripción del Problema o Consulta *
                  </label>
                  <textarea
                    value={supportForm.message}
                    onChange={(e) => setSupportForm(prev => ({ ...prev, message: e.target.value }))}
                    rows={6}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Describe detalladamente tu consulta o problema. Incluye pasos para reproducir el problema si es técnico."
                    required
                  />
                </div>

                {supportTickets.length > 0 && (
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                    <h4 className="text-gray-800 font-medium mb-3">Tickets enviados recientemente:</h4>
                    <div className="space-y-2 max-h-48 overflow-y-auto">
                      {supportTickets
                        .filter(ticket => ticket.restaurantId === restaurant?.id)
                        .slice(-5)
                        .reverse()
                        .map(ticket => (
                          <div key={ticket.id} className="bg-white p-3 rounded border border-gray-200 hover:border-gray-300 transition-colors">
                            <div className="flex items-center justify-between mb-2">
                              <div className="font-medium text-gray-900 text-sm truncate flex-1 mr-2">
                                {ticket.subject}
                              </div>
                              <div className="flex gap-1 flex-shrink-0">
                                {getPriorityBadge(ticket.priority)}
                                {getStatusBadge(ticket.status)}
                              </div>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="text-xs text-gray-500">
                                {new Date(ticket.createdAt).toLocaleDateString()} • {getCategoryName(ticket.category)}
                              </div>
                              <Button
                                variant="ghost"
                                size="sm"
                                icon={Eye}
                                onClick={() => handleViewTicketDetails(ticket)}
                                className="text-blue-600 hover:text-blue-700"
                              >
                                Ver Detalles
                              </Button>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                )}

                <div className="flex justify-end gap-3 pt-4 border-t border-gray-200">
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={() => setSupportForm({
                      subject: '',
                      priority: 'medium',
                      category: 'general',
                      message: '',
                      contactEmail: restaurant?.email || '',
                      contactPhone: restaurant?.phone || ''
                    })}
                  >
                    Limpiar Formulario
                  </Button>
                  <Button
                    type="submit"
                    loading={supportLoading}
                    icon={Send}
                    disabled={!supportForm.subject.trim() || !supportForm.message.trim() || !supportForm.contactEmail.trim()}
                  >
                    Enviar Solicitud
                  </Button>
                </div>
              </form>

              <div className="mt-8 bg-blue-50 rounded-lg p-6">
                <h4 className="text-gray-900 font-medium mb-3">Otros canales de soporte:</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>📧 Email directo: <a href="mailto:admin@digitalfenixpro.com" className="text-blue-600 hover:text-blue-700">admin@digitalfenixpro.com</a></p>
                  <p>⏰ Horario de atención: Lunes a Viernes, 9:00 AM - 6:00 PM</p>
                  <p>🕐 Tiempo de respuesta típico: 2-24 horas según prioridad</p>
                </div>
                
                <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-blue-800 text-sm">
                    <strong>Nota:</strong> Los tickets se almacenan localmente y se envían automáticamente a nuestro sistema de soporte. 
                    Recibirás una respuesta en el email de contacto proporcionado.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <Modal
        isOpen={showTicketDetailModal}
        onClose={() => {
          setShowTicketDetailModal(false);
          setSelectedTicket(null);
        }}
        title="Detalles del Ticket"
        size="lg"
      >
        {selectedTicket && (
          <div className="space-y-4 md:space-y-6">
            <div className="bg-gray-50 rounded-lg p-3 md:p-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-2">
                <h3 className="text-base md:text-lg font-semibold text-gray-900">{selectedTicket.subject}</h3>
                <div className="flex gap-2">
                  {getPriorityBadge(selectedTicket.priority)}
                  {getStatusBadge(selectedTicket.status)}
                </div>
              </div>
              <div className="text-sm text-gray-600">
                Ticket ID: {selectedTicket.id} • {new Date(selectedTicket.createdAt).toLocaleString()}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div>
                <h4 className="text-sm md:text-md font-medium text-gray-900 mb-2 md:mb-3">Información del Ticket</h4>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="text-gray-600">Categoría:</span> {getCategoryName(selectedTicket.category)}
                  </div>
                  <div>
                    <span className="text-gray-600">Prioridad:</span> {selectedTicket.priority.charAt(0).toUpperCase() + selectedTicket.priority.slice(1)}
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-md font-medium text-gray-900 mb-3">Información de Contacto</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 text-gray-400 mr-2" />
                    <span>{selectedTicket.contactEmail}</span>
                  </div>
                  {selectedTicket.contactPhone && (
                    <div className="flex items-center">
                      <Phone className="w-4 h-4 text-gray-400 mr-2" />
                      <span>{selectedTicket.contactPhone}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-md font-medium text-gray-900 mb-3">Tu Mensaje</h4>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-blue-800 whitespace-pre-wrap">{selectedTicket.message}</p>
              </div>
            </div>

            {selectedTicket.response ? (
              <div>
                <h4 className="text-md font-medium text-gray-900 mb-3">Respuesta del Equipo de Soporte</h4>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-sm text-green-800 whitespace-pre-wrap">{selectedTicket.response}</p>
                  {selectedTicket.responseDate && (
                    <div className="text-xs text-green-600 mt-3 pt-3 border-t border-green-200">
                      <div className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        Respondido el: {new Date(selectedTicket.responseDate).toLocaleString()}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="flex items-center">
                  <HelpCircle className="w-5 h-5 text-yellow-600 mr-2" />
                  <div>
                    <h4 className="text-yellow-800 font-medium">Esperando Respuesta</h4>
                    <p className="text-yellow-700 text-sm">
                      Tu ticket está siendo revisado por nuestro equipo. Te contactaremos pronto.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {selectedTicket.adminNotes && (
              <div>
                <h4 className="text-md font-medium text-gray-900 mb-3">Notas Adicionales</h4>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <p className="text-sm text-gray-700 whitespace-pre-wrap">{selectedTicket.adminNotes}</p>
                </div>
              </div>
            )}

            <div className="flex justify-end pt-4 border-t border-gray-200">
              <Button
                onClick={() => {
                  setShowTicketDetailModal(false);
                  setSelectedTicket(null);
                }}
              >
                Cerrar
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};
