// Translation system for the restaurant management app
export type Language = 'es' | 'en';

interface Translations {
  // Common
  save: string;
  cancel: string;
  edit: string;
  delete: string;
  create: string;
  update: string;
  loading: string;
  search: string;
  filter: string;
  actions: string;
  status: string;
  date: string;
  name: string;
  description: string;
  email: string;
  phone: string;
  address: string;
  total: string;
  subtotal: string;
  yes: string;
  no: string;
  close: string;
  view: string;
  print: string;
  download: string;
  active: string;
  inactive: string;
  pending: string;
  confirmed: string;
  preparing: string;
  ready: string;
  delivered: string;
  cancelled: string;
  
  // Navigation
  dashboard: string;
  categories: string;
  menu: string;
  orders: string;
  customers: string;
  subscription: string;
  settings: string;
  analytics: string;

  // Auth Context Errors
  userNotFound: string;
  incorrectPassword: string;
  restaurantNotFoundForUser: string;
  noRestaurantAssigned: string;
  emailAlreadyRegistered: string;
  noAccountFoundWithEmail: string;
  passwordRecoveryRequest: string;
  passwordRecoveryMessage: string;
  userRole: string;
  requestDate: string;
  userWithoutRestaurant: string;
  noName: string;
  notAvailable: string;
  
  // Auth
  login: string;
  register: string;
  logout: string;
  loginTitle: string;
  loginSubtitle: string;
  registerTitle: string;
  registerSubtitle: string;
  password: string;
  confirmPassword: string;
  forgotPassword: string;
  noAccount: string;
  restaurantName: string;
  ownerName: string;
  acceptTerms: string;
  backToLogin: string;
  demoAccounts: string;
  superadmin: string;
  restaurant: string;
  requestSent: string;
  requestInfo: string;
  requestResponse: string;
  recoverPassword: string;
  recoverPasswordInstructions: string;
  helpReactivateAccount: string;
  emailPlaceholder: string;
  sendRequest: string;
  requestSendError: string;

  // Register Form
  restaurantNameRequired: string;
  emailRequired: string;
  passwordRequired: string;
  mustAcceptTerms: string;
  registerError: string;
  contactEmail: string;
  restaurantAddress: string;
  minimumCharacters: string;
  repeatPassword: string;
  termsAndConditions: string;
  ofService: string;
  createAccount: string;
  termsModalTitle: string;
  restaurantNamePlaceholder: string;
  ownerNamePlaceholder: string;
  contactEmailPlaceholder: string;
  phonePlaceholder: string;
  addressPlaceholder: string;

  // Change Password Modal
  changePasswordRequired: string;
  provisionalPasswordDetected: string;
  securityPasswordChange: string;
  newPassword: string;
  confirmNewPassword: string;
  changePassword: string;
  writePasswordAgain: string;
  
  // Dashboard
  totalProducts: string;
  activeProducts: string;
  todayOrders: string;
  totalSales: string;
  recentOrders: string;
  restaurantStatus: string;
  lastUpdate: string;
  noOrdersYet: string;
  ordersWillAppear: string;
  
  // Orders
  orderManagement: string;
  orderNumber: string;
  customer: string;
  orderType: string;
  pickup: string;
  delivery: string;
  table: string;
  completedToday: string;
  inPreparation: string;
  printTicket: string;
  confirmOrder: string;
  cancelOrder: string;
  nextStep: string;
  customerInfo: string;
  products: string;
  orderSummary: string;
  specialInstructions: string;
  deliveryAddress: string;
  references: string;
  estimatedTime: string;
  thankYouOrder: string;
  
  // Products
  productManagement: string;
  newProduct: string;
  productName: string;
  category: string;
  price: string;
  variations: string;
  ingredients: string;
  noProductsInCategory: string;
  createFirstProduct: string;
  productImages: string;
  variationsAndPrices: string;
  addVariation: string;
  addIngredient: string;
  preparationTime: string;
  productStatus: string;
  draft: string;
  outOfStock: string;
  archived: string;
  optional: string;
  extraCost: string;
  productUpdated: string;
  productCreated: string;
  productDeleted: string;
  productArchived: string;
  
  // Categories
  categoryManagement: string;
  newCategory: string;
  categoryName: string;
  noCategoriesCreated: string;
  createFirstCategory: string;
  categoryIcon: string;
  categoryUpdated: string;
  categoryCreated: string;
  categoryDeleted: string;
  categoryActivated: string;
  categoryDeactivated: string;
  order: string;
  totalCategories: string;
  activeCategories: string;
  inactiveCategories: string;
  categoriesTip: string;
  categoriesDescription: string;
  categoriesNameDes: string;
  categoryAppearance: string;
  catIconSec: string;
  catIconDes: string;
  catImg: string;
  catUpImg: string;
  catImgRec: string;
  catObligatry: string;
  catDeleteImg: string;
  categoryActivatedDes: string;
  categoryDeactivatedDes: string;
  viewMenu: string;
  
  // Customers
  customerManagement: string;
  totalCustomers: string;
  vipCustomers: string;
  frequentCustomers: string;
  averageSpent: string;
  contact: string;
  ordersCount: string;
  totalSpent: string;
  orderTypes: string;
  segment: string;
  lastOrder: string;
  newCustomer: string;
  regular: string;
  frequent: string;
  vip: string;
  
  // Settings
  generalSettings: string;
  regionalSettings: string;
  language: string;
  currency: string;
  businessHours: string;
  deliverySettings: string;
  tableOrders: string;
  qrCodes: string;
  themeSettings: string;
  socialMedia: string;
  notifications: string;
  restaurantInfo: string;
  contactInfo: string;
  businessInfo: string;
  operationalSettings: string;
  enabled: string;
  disabled: string;
  minimumOrder: string;
  deliveryCost: string;
  deliveryZones: string;
  numberOfTables: string;
  enableQRCodes: string;
  printAll: string;
  downloadAll: string;
  mesa: string;
  
  // Analytics
  totalRevenue: string;
  averageTicket: string;
  monthlyOrders: string;
  ordersByType: string;
  ordersByStatus: string;
  topProducts: string;
  recentActivity: string;
  filterByDates: string;
  from: string;
  to: string;
  clearFilters: string;
  showingDataFrom: string;
  until: string;
  today: string;
  notEnoughData: string;
  noSalesYet: string;
  sold: string;
  
  // Subscription
  subscriptionPlans: string;
  choosePlan: string;
  currentPlan: string;
  planActivated: string;
  freePlan: string;
  basicPlan: string;
  proPlan: string;
  businessPlan: string;
  mostPopular: string;
  unlimited: string;
  upTo: string;
  advancedStats: string;
  customDomain: string;
  prioritySupport: string;
  advancedCustomization: string;
  perfectToStart: string;
  forGrowingRestaurants: string;
  forChainsAndFranchises: string;
  needHelp: string;
  allPlansInclude: string;
  canChangeAnytime: string;
  
  // Public Menu
  addToCart: string;
  cart: string;
  checkout: string;
  yourOrder: string;
  cartEmpty: string;
  addProductsToStart: string;
  proceedToCheckout: string;
  orderConfirmed: string;
  orderSent: string;
  willContactSoon: string;
  continue: string;
  finalizeOrder: string;
  orderTypeSelection: string;
  pickupAtRestaurant: string;
  tableOrder: string;
  selectTable: string;
  fullName: string;
  optionalEmail: string;
  completeAddress: string;
  locationReferences: string;
  
  // Days of week
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
  saturday: string;
  sunday: string;
  
  // Months
  january: string;
  february: string;
  march: string;
  april: string;
  may: string;
  june: string;
  july: string;
  august: string;
  september: string;
  october: string;
  november: string;
  december: string;
  
  // Time
  open: string;
  closed: string;
  openNow: string;
  closedNow: string;
  hours: string;
  minutes: string;
  
  // Errors and Messages
  error: string;
  success: string;
  warning: string;
  info: string;
  required: string;
  invalidEmail: string;
  passwordTooShort: string;
  passwordsDontMatch: string;
  userNotFound: string;
  incorrectPassword: string;
  emailAlreadyRegistered: string;
  registrationSuccessful: string;
  accountPendingApproval: string;
  unexpectedError: string;
  confirmDelete: string;
  actionCannotBeUndone: string;
  
  // Limits and Restrictions
  productLimitReached: string;
  categoryLimitReached: string;
  upgradeSubscription: string;
  addMoreProducts: string;
  addMoreCategories: string;
  
  // Super Admin
  superAdminPanel: string;
  superAdminDashboard: string;
  restaurantsManagement: string;
  usersManagement: string;
  subscriptionsManagement: string;
  systemStatistics: string;
}

const translations: Record<Language, Translations> = {
  es: {
    // Common
    suscription: 'Suscripción',
    save: 'Guardar',
    cancel: 'Cancelar',
    edit: 'Editar',
    delete: 'Eliminar',
    create: 'Crear',
    update: 'Actualizar',
    loading: 'Cargando',
    search: 'Buscar',
    filter: 'Filtrar',
    actions: 'Acciones',
    status: 'Estado',
    date: 'Fecha',
    name: 'Nombre',
    description: 'Descripción',
    email: 'Email',
    phone: 'Teléfono',
    address: 'Dirección',
    total: 'Total',
    subtotal: 'Subtotal',
    yes: 'Sí',
    no: 'No',
    close: 'Cerrar',
    view: 'Ver',
    print: 'Imprimir',
    download: 'Descargar',
    active: 'Activo',
    inactive: 'Inactivo',
    pending: 'Pendiente',
    confirmed: 'Confirmado',
    preparing: 'Preparando',
    ready: 'Listo',
    delivered: 'Entregado',
    cancelled: 'Cancelado',
    
    // Navigation
    dashboard: 'Dashboard',
    categories: 'Categorías',
    menu: 'Menú',
    orders: 'Pedidos',
    customers: 'Clientes',
    subscription: 'Suscripción',
    settings: 'Configuración',
    analytics: 'Estadísticas',

    // Terms and Conditions
    termsSection1Title: 'Aceptación de los Términos',
    termsSection1Content: 'Al registrarse y utilizar Platyo, usted acepta estar legalmente vinculado por estos Términos y Condiciones. Si no está de acuerdo con alguna parte de estos términos, no debe utilizar nuestro servicio.',
    
    termsSection2Title: 'Descripción del Servicio',
    termsSection2Content: 'Platyo es una plataforma de gestión para restaurantes que proporciona herramientas para:',
    termsSection2Item1: 'Gestión de menú digital y catálogo de productos',
    termsSection2Item2: 'Sistema de pedidos en línea',
    termsSection2Item3: 'Administración de clientes y órdenes',
    termsSection2Item4: 'Análisis y reportes de ventas',
    termsSection2Item5: 'Gestión de inventario y categorías',
    
    termsSection3Title: 'Registro y Cuenta',
    termsSection3Content: 'Para utilizar Platyo, debe crear una cuenta proporcionando información precisa y completa. Usted es responsable de:',
    termsSection3Item1: 'Mantener la confidencialidad de su contraseña',
    termsSection3Item2: 'Todas las actividades que ocurran bajo su cuenta',
    termsSection3Item3: 'Notificar inmediatamente cualquier uso no autorizado',
    termsSection3Item4: 'Proporcionar información veraz y actualizada',
    
    termsSection4Title: 'Suscripciones y Pagos',
    termsSection4Content: 'Platyo ofrece diferentes planes de suscripción. Al suscribirse, usted acepta:',
    termsSection4Item1: 'Pagar todas las tarifas asociadas con su plan seleccionado',
    termsSection4Item2: 'Las renovaciones automáticas según la periodicidad del plan',
    termsSection4Item3: 'Que los precios pueden cambiar con previo aviso de 30 días',
    termsSection4Item4: 'La política de reembolso según el plan contratado',
    
    termsSection5Title: 'Uso Aceptable',
    termsSection5Content: 'Al usar Platyo, usted se compromete a NO:',
    termsSection5Item1: 'Violar leyes o regulaciones aplicables',
    termsSection5Item2: 'Infringir derechos de propiedad intelectual',
    termsSection5Item3: 'Transmitir contenido ofensivo, ilegal o inapropiado',
    termsSection5Item4: 'Intentar acceder sin autorización a sistemas o datos',
    termsSection5Item5: 'Usar el servicio para actividades fraudulentas',
    termsSection5Item6: 'Interferir con el funcionamiento del servicio',
    
    termsSection6Title: 'Propiedad Intelectual',
    termsSection6Content1: 'Todo el contenido, características y funcionalidad de Platyo son propiedad exclusiva de la empresa y están protegidos por leyes de derechos de autor, marcas registradas y otras leyes de propiedad intelectual.',
    termsSection6Content2: 'Usted conserva todos los derechos sobre el contenido que cargue (menús, productos, imágenes), pero nos otorga una licencia para usarlo en la prestación del servicio.',
    
    termsSection7Title: 'Privacidad y Protección de Datos',
    termsSection7Content: 'Recopilamos y procesamos datos personales de acuerdo con nuestra Política de Privacidad y cumpliendo con:',
    termsSection7Item1: 'Ley 1581 de 2012 de Protección de Datos Personales en Colombia',
    termsSection7Item2: 'Decreto 1377 de 2013',
    termsSection7Item3: 'Principios de legalidad, finalidad, libertad, veracidad, transparencia, acceso y seguridad',
    termsSection7Content2: 'Sus derechos incluyen: conocer, actualizar, rectificar y suprimir sus datos personales, así como revocar la autorización otorgada.',
    
    termsSection8Title: 'Limitación de Responsabilidad',
    termsSection8Content: 'Platyo se proporciona "tal cual" y "según disponibilidad". No garantizamos que:',
    termsSection8Item1: 'El servicio será ininterrumpido o libre de errores',
    termsSection8Item2: 'Los resultados obtenidos serán exactos o confiables',
    termsSection8Item3: 'Todos los errores serán corregidos',
    termsSection8Content2: 'No seremos responsables por daños indirectos, incidentales, especiales, consecuentes o punitivos, incluyendo pérdida de beneficios, datos, uso o buena voluntad.',
    
    termsSection9Title: 'Indemnización',
    termsSection9Content: 'Usted acepta indemnizar y mantener indemne a Platyo, sus afiliados, directores, empleados y agentes de cualquier reclamación, daño, obligación, pérdida, responsabilidad, costo o deuda que surja de:',
    termsSection9Item1: 'Su uso del servicio',
    termsSection9Item2: 'Violación de estos términos',
    termsSection9Item3: 'Violación de derechos de terceros',
    termsSection9Item4: 'Contenido que usted publique o comparta',
    
    termsSection10Title: 'Terminación del Servicio',
    termsSection10Content: 'Podemos suspender o terminar su acceso al servicio inmediatamente, sin previo aviso, por cualquier motivo, incluyendo:',
    termsSection10Item1: 'Violación de estos términos',
    termsSection10Item2: 'Solicitud de autoridades legales',
    termsSection10Item3: 'Discontinuación del servicio',
    termsSection10Item4: 'Actividad fraudulenta o ilegal',
    
    termsSection11Title: 'Modificaciones',
    termsSection11Content: 'Nos reservamos el derecho de modificar estos términos en cualquier momento. Las modificaciones entrarán en vigor inmediatamente después de su publicación. Su uso continuado del servicio constituye su aceptación de los términos modificados.',
    
    termsSection12Title: 'Ley Aplicable y Jurisdicción',
    termsSection12Content: 'Estos términos se rigen por las leyes de la República de Colombia. Cualquier disputa será resuelta en los tribunales competentes de Colombia, renunciando expresamente a cualquier otro fuero que pudiera corresponder.',
    
    termsSection13Title: 'Disposiciones Generales',
    termsSection13Item1Label: 'Divisibilidad',
    termsSection13Item1: 'Si alguna disposición es considerada inválida, las demás permanecerán vigentes',
    termsSection13Item2Label: 'Renuncia',
    termsSection13Item2: 'La falta de ejercicio de un derecho no constituye renuncia al mismo',
    termsSection13Item3Label: 'Acuerdo Completo',
    termsSection13Item3: 'Estos términos constituyen el acuerdo completo entre las partes',
    termsSection13Item4Label: 'Cesión',
    termsSection13Item4: 'No puede ceder sus derechos sin nuestro consentimiento previo por escrito',
    
    termsSection14Title: 'Contacto',
    termsSection14Content: 'Para preguntas sobre estos términos, puede contactarnos a través de:',
    termsSection14Item1: 'Email: admin@digitalfenixpro.com',
    termsSection14Item2: 'Dentro de la plataforma mediante el sistema de tickets de soporte',
    
    termsLastUpdate: 'Última actualización',
    termsLastUpdateDate: 'Noviembre 2025',
    termsAcceptDisclaimer: 'Al hacer clic en "Aceptar" o al usar el servicio, usted reconoce que ha leído, entendido y acepta estar legalmente vinculado por estos Términos y Condiciones.',
    acceptTermsAndConditionsButton: 'Aceptar Términos y Condiciones',


    // Auth Context Errors
    userNotFound: 'Usuario no encontrado',
    incorrectPassword: 'Contraseña incorrecta',
    restaurantNotFoundForUser: 'Restaurante no encontrado para este usuario',
    noRestaurantAssigned: 'No tienes un restaurante asignado. Contacta al administrador.',
    emailAlreadyRegistered: 'El email ya está registrado',
    noAccountFoundWithEmail: 'No se encontró una cuenta con ese email',
    passwordRecoveryRequest: 'Solicitud de recuperación de contraseña',
    passwordRecoveryMessage: 'ha solicitado recuperar su contraseña.',
    userRole: 'Rol del usuario',
    requestDate: 'Fecha de solicitud',
    userWithoutRestaurant: 'Usuario sin restaurante',
    noName: 'Sin nombre',
    notAvailable: 'No disponible',

    
    // Auth
    login: 'Iniciar Sesión',
    register: 'Registrarse',
    logout: 'Cerrar Sesión',
    loginTitle: 'Iniciar Sesión',
    loginSubtitle: 'Accede a tu panel de administración',
    registerTitle: 'Registra tu Restaurante',
    registerSubtitle: 'Completa los datos para crear tu cuenta',
    password: 'Contraseña',
    noAccount: '¿No tienes una cuenta?',
    confirmPassword: 'Confirmar Contraseña',
    forgotPassword: '¿Olvidaste tu contraseña?',  
    restaurantName: 'Nombre del Restaurante',
    ownerName: 'Nombre del Propietario',
    acceptTerms: 'Acepto los ',
    backToLogin: 'Volver al Login',
    demoAccounts: 'Cuentas de demostración:',
    superadmin: 'Superadmin',
    restaurant: 'Restaurante',
    authPageSubtitle: 'Sistema Completo de Gestión de Restaurantes',
    authPageTitle: 'Transforma la gestión de tu restaurante',
    authPageDescription: 'La plataforma todo-en-uno que necesitas para modernizar tu negocio y aumentar tus ventas',
    featureDigitalMenu: 'Menú Digital',
    featureDigitalMenuDesc: 'Catálogo online con código QR',
    featureMoreSales: 'Más Ventas',
    featureMoreSalesDesc: 'Aumenta hasta 40% tus ingresos',
    featureRealTimeAnalytics: 'Análisis en Tiempo Real',
    featureRealTimeAnalyticsDesc: 'Reportes y estadísticas detalladas',
    featureOrderManagement: 'Gestión de Pedidos',
    featureOrderManagementDesc: 'Control total y eficiente',
    featureCustomerBase: 'Base de Clientes',
    featureCustomerBaseDesc: 'Fideliza y conoce mejor a tus clientes',
    featureQuickSetup: 'Configuración Rápida',
    featureQuickSetupDesc: 'Listo en menos de 10 minutos',
    featurePOSBilling: 'Facturación POS',
    featurePOSBillingDesc: 'Sistema integrado de punto de venta',
    featureRealTimeTracking: 'Seguimiento en Tiempo Real',
    featureRealTimeTrackingDesc: 'Clientes rastrean sus pedidos al instante',
    statActiveRestaurants: 'Restaurantes Activos',
    statOrdersProcessed: 'Pedidos Procesados',
    statSatisfaction: 'Satisfacción',
    requestSent: '¡Solicitud Enviada!',
    requestInfo: 'Hemos recibido tu solicitud de recuperación de contraseña.',
    requestResponse: 'Nuestro equipo se contactará contigo al email',
    recoverPassword: 'Recuperar Contraseña',
    recoverPasswordInstructions: 'Ingresa tu dirección de email y nos pondremos en contacto contigo para ayudarte a recuperar el acceso a tu cuenta.',
    helpReactivateAccount: 'para ayudarte a reactivar tu cuenta.',
    emailPlaceholder: 'tu@email.com',
    sendRequest: 'Enviar Solicitud',
    requestSendError: 'Error al enviar la solicitud',

    // Register Form
    restaurantNameRequired: 'El nombre del restaurante es obligatorio',
    emailRequired: 'El email es obligatorio',
    passwordRequired: 'La contraseña es obligatoria',
    mustAcceptTerms: 'Debes aceptar los términos y condiciones',
    registerError: 'Error al registrar',
    contactEmail: 'Email de Contacto',
    restaurantAddress: 'Dirección del Restaurante',
    minimumCharacters: 'Mínimo 6 caracteres',
    repeatPassword: 'Repite tu contraseña',
    termsAndConditions: 'términos y condiciones',
    ofService: 'del servicio',
    createAccount: 'Crear Cuenta',
    termsModalTitle: 'Términos y Condiciones de Platyo',
    restaurantNamePlaceholder: 'Mi Restaurante',
    ownerNamePlaceholder: 'Pepito Perez',
    contactEmailPlaceholder: 'contacto@mirestaurante.com',
    phonePlaceholder: '+57 (310) 123-4567',
    addressPlaceholder: 'Calle 123 No 45-67, Ciudad',

    // Change Password Modal
    changePasswordRequired: 'Cambio de Contraseña Requerido',
    provisionalPasswordDetected: 'Contraseña provisional detectada.',
    securityPasswordChange: 'Por seguridad, debes cambiar tu contraseña antes de continuar. Esta contraseña será permanente y podrás usarla en futuros inicios de sesión.',
    newPassword: 'Nueva Contraseña',
    confirmNewPassword: 'Confirmar Nueva Contraseña',
    changePassword: 'Cambiar Contraseña',
    writePasswordAgain: 'Escribe la contraseña nuevamente',


    // Dashboard
    totalProducts: 'Productos',
    activeProducts: 'activos',
    todayOrders: 'Pedidos Hoy',
    totalSales: 'Ventas Totales',
    recentOrders: 'Pedidos Recientes',
    restaurantStatus: 'Estado del Restaurante',
    lastUpdate: 'Última actualización',
    noOrdersYet: 'No hay pedidos aún',
    ordersWillAppear: 'Los pedidos aparecerán aquí una vez que los clientes empiecen a ordenar.',
    noSubscription: 'Sin suscripción',
    btnTutorial: 'Tutorial',
    statTotalSubtitle: 'total',
    statCurrentMonthSubtitle: 'Mes actual',
    statusMenuUrl: 'URL del Menú',
    statusSubscription: 'Suscripción',
    statusTableService: 'Atención en Mesas',
    na: 'N/A',
    orderTable: 'Mesa',
    
    // Orders
    orderManagement: 'Gestión de Pedidos',
    orderNumber: 'Pedido',
    customer: 'Cliente',
    orderType: 'Tipo',
    pickup: 'Recoger',
    delivery: 'Delivery',
    table: 'Mesa',
    completedToday: 'Completados Hoy',
    inPreparation: 'En Preparación',
    printTicket: 'Imprimir Ticket',
    confirmOrder: 'Confirmar',
    cancelOrder: 'Cancelar',
    nextStep: 'Siguiente Paso',
    customerInfo: 'Información del Cliente',
    products: 'Productos',
    orderSummary: 'Resumen del Pedido',
    specialInstructions: 'Instrucciones Especiales',
    deliveryAddress: 'Dirección de Entrega',
    references: 'Referencias',
    estimatedTime: 'Tiempo estimado',
    thankYouOrder: '¡Gracias por tu pedido!',
    statusUpdatedTitle: 'Estado Actualizado',
    orderStatusUpdated: 'Estado del pedido actualizado',
    orderTypeTitle: 'Tipo de pedido',
    orderStatusMarkedSuccess: 'El estado del pedido ha sido actualizado.',
    orderConfirmedMsg: 'Pedido confirmado',
    orderInPreparationMsg: 'Pedido en preparación',
    orderReadyForDeliveryMsg: 'Pedido listo para entrega',
    orderDeliveredMsg: 'Pedido entregado',
    orderCancelledMsg: 'Pedido cancelado',
    actionConfirm: 'Confirmar',
    actionPrepare: 'Preparar',
    actionMarkReady: 'Marcar Listo',
    actionDeliver: 'Entregar',
    bulkActionCompleteTitle: 'Acción Masiva Completada',
    ordersUpdatedCount: 'pedidos actualizados',
    orderLabel: 'Pedido',
    productsTitle: 'Productos',
    productHeader: 'Producto',
    variationLabel: 'Variación',
    quantityHeader: 'Cantidad',
    priceHeader: 'Precio',
    noteLabel: 'Nota',
    deliveryLabel: 'Domicilio',
    specialInstructionsTitle: 'Instrucciones Especiales',
    restaurantDefaultName: 'Restaurante',
    newOrderTitle: 'NUEVO PEDIDO',
    orderNumberLabel: 'Pedido #',
    customerSectionTitle: 'CLIENTE',
    deliveryReferencesLabel: 'Referencias',
    tableLabel: 'Mesa',
    orderSummaryTitle: 'RESUMEN DEL PEDIDO',
    estimatedTimeLabel: 'Tiempo estimado',
    defaultPreparationTime: '30-45 minutos',
    thankYouForOrder: 'Gracias por tu pedido!',
    orderUpdateTitle: 'ACTUALIZACIÓN DE PEDIDO',
    statusPendingMessage: 'está *PENDIENTE* de confirmación',
    statusConfirmedMessage: 'ha sido *CONFIRMADO* y será procesado pronto',
    statusPreparingMessage: 'está en *PREPARACIÓN*',
    statusReadyMessage: 'está *LISTO* para entrega/recoger',
    statusDeliveredMessage: 'ha sido *ENTREGADO*',
    statusCancelledMessage: 'ha sido *CANCELADO*',
    readyForPickup: 'Tu pedido está listo para recoger.',
    weAreWaitingForYou: 'Te esperamos!',
    readyForDelivery: 'Tu pedido está listo y será entregado pronto.',
    preparingWithCare: 'Estamos preparando tu pedido con mucho cuidado.',
    thankYouForPreference: 'Gracias por tu preferencia!',
    errorTitle: 'Error',
    noPhoneError: 'El pedido no tiene un número de teléfono asociado',
    invalidPhoneError: 'El número de teléfono no es válido. Debe tener al menos 10 dígitos.',
    warningTitle: 'Advertencia',
    popupWarning: 'Por favor permite las ventanas emergentes para abrir WhatsApp',
    successTitle: 'Éxito',
    openingWhatsapp: 'Abriendo WhatsApp...',
    whatsappOpenError: 'No se pudo abrir WhatsApp. Por favor intenta de nuevo.',
    ticketTitle: 'Ticket',
    dianResolutionNumber: 'Resolución DIAN N°',
    rangeLabel: 'Rango',
    taxRegimeSimple: 'Régimen Simple',
    taxRegimeCommon: 'Régimen Común',
    taxRegimeNoIva: 'No responsable de IVA',
    deliveryOrderType: 'Domicilio',
    pickupOrderType: 'Para llevar',
    tableOrderType: 'Mesa',
    ivaLabel: 'IVA (19%)',
    suggestedTipLabel: 'Propina sugerida (10%)',
    totalWithTipLabel: 'Total con propina',
    thankYouForPurchase: '¡Gracias por su compra!',
    createOrder: 'Crear Pedido',
    bulkActions: 'Acciones Masivas',
    filtersTitle: 'Filtros',
    ordersToday: 'Pedidos Hoy',
    dailySales: 'Ventas del día',
    inProcess: 'En Proceso',
    averageValue: 'Valor Promedio',
    completedOrders: 'Pedidos Completados',
    completionRate: 'Tasa de Finalización',
    totalOrders: 'Pedidos Totales',
    bulkActionLabel: 'Acción Masiva',
    selectActionPlaceholder: 'Seleccionar acción',
    markAsConfirmed: 'Marcar como confirmado',
    markAsPreparing: 'Marcar como en preparación',
    markAsReady: 'Marcar como listo',
    markAsDelivered: 'Marcar como entregado',
    apply: 'Aplicar',
    pendingPlural: 'Pendientes',
    confirmedPlural: 'Confirmados',
    preparingPlural: 'En preparación',
    readyPlural: 'Listos',
    deliveredPlural: 'Entregados',
    cancelledPlural: 'Cancelados',
    allTypes: 'Todos los tipos',
    yesterday: 'Ayer',
    lastWeek: 'Última semana',
    lastMonth: 'Último mes',
    customRange: 'Rango personalizado',
    sortByLabel: 'Ordenar por...',
    noOrdersRegistered: 'No hay pedidos registrados',
    noOrdersFound: 'No se encontraron pedidos',
    noOrdersMessage: 'Los pedidos aparecerán aquí una vez que los clientes empiecen a ordenar.',
    adjustFiltersMessage: 'Intenta ajustar los filtros de búsqueda.',
    sendByWhatsappTitle: 'Enviar por WhatsApp',
    changeToTitle: 'Cambiar a:',
    previous: 'Anterior',
    next: 'Siguiente',
    showing: 'Mostrando',
    of: 'de',
    results: 'resultados',
    orderInfoTitle: 'Información del Pedido',
    customerInfoTitle: 'Información del Cliente',
    nameRequiredLabel: 'Nombre *',
    customerNamePlaceholder: 'Nombre del cliente',
    phoneRequiredLabel: 'Teléfono *',
    customerPhonePlaceholder: 'Teléfono del cliente',
    customerEmailPlaceholder: 'Email del cliente',
    customerAddressPlaceholder: 'Dirección del cliente',
    deliveryAddressLabel: 'Dirección de Entrega',
    deliveryAddressPlaceholder: 'Dirección completa de entrega',
    deliveryReferencesPlaceholder: 'Referencias para encontrar la dirección',
    tableNumberLabel: 'Número de Mesa',
    tableNumberPlaceholder: 'Número de mesa',
    specialInstructionsLabel: 'Instrucciones Especiales',
    specialInstructionsPlaceholder: 'Instrucciones especiales para el pedido...',
    saveOrder: 'Guardar Pedido',
    updateOrder: 'Actualizar Pedido',
    deleteOrder: 'Eliminar Pedido',
    confirmDeleteOrder: '¿Estás seguro que deseas eliminar el pedido',
    irreversibleAction: 'Esta acción es irreversible.',
    namePhoneRequiredError: 'Por favor completa el nombre y teléfono del cliente',
    nameLettersOnlyError: 'El nombre solo puede contener letras y espacios',
    phoneInvalidError: 'El teléfono solo puede contener números y el símbolo +',
    invalidEmailError: 'Por favor ingresa un email válido',
    orderUpdateSuccess: 'El pedido ha sido actualizado exitosamente.',
    orderCreatedTitle: 'Pedido Creado',
    orderCreateSuccess: 'El pedido ha sido creado exitosamente.',
    orderDeletedTitle: 'Pedido Eliminado',
    orderDeleteSuccess: 'El pedido ha sido eliminado exitosamente.',
    customerLabel: 'Cliente',
    addressLabel: 'Dirección',
    dateLabel: 'Fecha',
    subtotalLabel: 'Subtotal',
    
    // Products
    productManagement: 'Gestión de Menú',
    newProduct: 'Nuevo Producto',
    productName: 'Nombre del Producto',
    category: 'Categoría',
    price: 'Precio',
    variations: 'Variaciones',
    ingredients: 'Ingredientes',
    noProductsInCategory: 'No hay productos en esta categoría',
    productImages: 'Imágenes del Producto',
    variationsAndPrices: 'Variaciones y Precios',
    addVariation: 'Agregar Variación',
    addIngredient: 'Agregar Ingrediente',
    preparationTime: 'Tiempo de Preparación',
    productStatus: 'Estado',
    draft: 'Borrador',
    outOfStock: 'Agotado',
    archived: 'Archivado',
    optional: 'Opcional',
    extraCost: 'Costo extra',
    productUpdated: 'Producto Actualizado',
    productCreated: 'Producto Creado',
    productDeleted: 'Producto Eliminado',
    productArchived: 'Producto Archivado',
    
    // Categories
    viewMenu: 'Ver Menú',
    categoryManagement: 'Gestión de Categorías',
    newCategory: 'Nueva Categoría',
    categoryName: 'Nombre de la Categoría',
    noCategoriesCreated: 'No hay categorías creadas',
    createFirstCategory: 'Crea tu primera categoría para organizar tu menú.',
    categoryIcon: 'Icono (Emoji)',
    categoryUpdated: 'Categoría Actualizada',
    categoryCreated: 'Categoría Creada',
    categoryDeleted: 'Categoría Eliminada',
    categoryActivated: 'Categoría Activada',
    categoryDeactivated: 'Categoría Desactivada',
    order: 'Orden',
    totalCategories: 'Total Categorías',
    activeCategories: 'Categorías Activas',
    inactiveCategories: 'Categorías Inactivas',
    categoriesTip: 'Arrastra y suelta las categorías para reordenarlas',
    categoriesCreated: 'Creada',
    categoriesDescription: 'Agrega una descripción para ayudar a tus clientes...',
    categoriesNameDes: 'Ej: Pizzas, Bebidas, Postres',
    categoryAppearance: 'Apariencia de la categoría',
    catIconSec: 'Icono (Emoji)',
    catIconDes: 'Usa un emoji para identificar rápidamente',
    catImg: 'Imagen de portada',
    catUpImg: 'Subir imagen',
    catImgRec: 'Recomendado: 600x600px (máx. 5MB)',
    catObligatry: '*Campos obligatorios',
    catDeleteImg: 'Eliminar imagen',
    categoryActivatedDes: 'La categoría ha sido activada y ahora aparece en su menú público.',
    categoryDeactivatedDes: 'La categoría ha sido desactivada y ya no aparece en su menú público.',
    
    // Customers
    deletedSuccessfully: 'Eliminados exitosamente',
    deleteCustomers: 'Eliminar clientes',
    selectedPlural: 'Clientes',
    customerPlural: 'Clientes',
    customerManagement: 'Gestión de Clientes',
    totalCustomers: 'Total Clientes',
    vipCustomers: 'Clientes VIP',
    frequentCustomers: 'Frecuentes',
    averageSpent: 'Gasto Promedio',
    contact: 'Contacto',
    ordersCount: 'Pedidos',
    totalSpent: 'Total Gastado',
    orderTypes: 'Tipos de Pedido',
    segment: 'Segmento',
    lastOrder: 'Último Pedido',
    newCustomer: 'Nuevo',
    deleteCustomer: 'Eliminar cliente',
    makeVip: 'Hacer VIP',
    regular: 'Regular',
    frequent: 'Frecuente',
    vip: 'VIP',
    filtersAndSearch: 'Filtros y Búsqueda',
    customerBase: 'Base de clientes',
    assignedManually: 'Asignados manualmente',
    averageSpending: 'Gasto Promedio',
    perCustomer: 'Por cliente',
    allStatuses: 'Todos los estados',
    activeLast30Days: 'Activos (últimos 30 días)',
    inactivePlus30Days: 'Inactivos (+30 días)',
    allSegments: 'Todos los segmentos',
    onlyVip: 'Solo VIP',
    onlyFrequent: 'Solo Frecuentes (5+)',
    onlyRegular: 'Solo Regular (2-4)',
    onlyNew: 'Solo Nuevos (1)',
    sortByName: 'Ordenar por Nombre',
    sortByOrders: 'Ordenar por Pedidos',
    sortBySpent: 'Ordenar por Gastado',
    sortByDate: 'Ordenar por Fecha',
    changeToDescending: 'Cambiar a descendente',
    changeToAscending: 'Cambiar a ascendente',
    avg: 'prom',
    segmentVipDescription: 'Asignado manualmente',
    segmentNewDescription: '1 pedido',
    segmentRegularDescription: '2-4 pedidos',
    segmentFrequentDescription: '5+ pedidos',
    segmentNote: '* Un cliente puede ser VIP y tener otro segmento',
    noRegisteredCustomers: 'No hay clientes registrados',
    noCustomersFound: 'No se encontraron clientes',
    customersWillAppear: 'Los clientes aparecerán aquí una vez que realicen pedidos.',
    tryDifferentSearch: 'Intenta con diferentes términos de búsqueda.',
    fullNameRequired: 'Nombre Completo*',
    phoneRequired: 'Teléfono*',
    customerName: 'Nombre del cliente',
    fullAddress: 'Dirección completa',
    deliveryInstructionsPlaceholder: 'Referencias para encontrar la dirección...',
    vipCustomer: 'Cliente VIP',
    saveChanges: 'Guardar Cambios',
    confirmDeletion: 'Confirmar Eliminación',
    deleteCustomerConfirm: '¿Eliminar cliente',
    actionWillDeletePermanently: 'Esta acción eliminará permanentemente:',
    allCustomerInfo: 'Toda la información del cliente',
    associatedOrders: 'pedido(s) asociado(s)',
    purchaseHistory: 'Historial de compras',
    customerVipStatus: 'Estado VIP del cliente',
    bulkEdit: 'Edición Masiva',
    customersSelected: 'cliente(s) seleccionado(s)',
    selectActionToPerform: 'Selecciona la acción a realizar:',
    markAsVip: 'Marcar como VIP',
    addVipStatusToSelected: 'Agregar estado VIP a todos los clientes seleccionados',
    removeVipStatusFromSelected: 'Quitar estado VIP de todos los clientes seleccionados',
    permanentlyDeleteAllCustomersAndOrders: 'Eliminar permanentemente todos los clientes y sus pedidos',
    importCustomersFromCSV: 'Importar Clientes desde CSV',
    csvFileFormat: 'Formato del archivo CSV:',
    customerFullName: 'Nombre completo del cliente',
    uniquePhoneNumber: 'Número de teléfono único',
    emailAddress: 'Correo electrónico',
    additionalDirections: 'Indicaciones adicionales',
    or: 'o',
    downloadExampleTemplate: 'Descargar plantilla de ejemplo',
    preview: 'Vista previa',
    line: 'Línea',
    validCustomers: 'cliente(s) válido(s)',
    searchCustomersPlaceholder: 'clientes por nombre, teléfono o email...',
    customersTemplate: 'plantilla_clientes',
    averagePerOrder: 'Promedio por Pedido',
    isVip: 'Es VIP',
    exampleDeliveryInstruction1: 'Casa de dos pisos portón azul',
    exampleDeliveryInstruction2: 'Apartamento 301 edificio blanco',
    vipCustomerRemoved: 'Cliente VIP Removido',
    vipCustomerAdded: 'Cliente VIP Agregado',
    noLongerVipCustomer: 'ya no es un cliente VIP.',
    nowVipCustomer: 'ahora es un cliente VIP.',
    noSelection: 'Sin selección',
    selectAtLeastOneCustomer: 'Selecciona al menos un cliente para editar.',
    vipAssigned: 'VIP Asignado',
    markedAsVipPlural: 'marcado(s) como VIP.',
    vipRemoved: 'VIP Removido',
    noLongerVipPlural: 'ya no es/son VIP.',
    customersDeleted: 'Clientes Eliminados',
    deletedSuccessfullyPlural: 'eliminado(s) exitosamente.',
    confirmDeleteMultiple: '¿Estás seguro de que quieres eliminar',
    warningDeleteAction: 'Esta acción eliminará también todos sus pedidos y no se puede deshacer.',
    customerUpdated: 'Cliente Actualizado',
    customerInfoUpdatedSuccessfully: 'La información del cliente ha sido actualizada exitosamente.',
    customerAndOrdersDeleted: 'El cliente "{name}" y todos sus pedidos han sido eliminados.',
    noDataToExport: 'Sin datos para exportar',
    noCustomersMatchFilters: 'No hay clientes que coincidan con los filtros actuales.',
    csvExported: 'CSV Exportado',
    exportedSuccessfullyPlural: 'Se han exportado {count} cliente(s) exitosamente.',
    templateDownloaded: 'Plantilla Descargada',
    useTemplateAsGuide: 'Usa esta plantilla como guía para importar clientes.',
    invalidFile: 'Archivo inválido',
    pleaseSelectValidCSV: 'Por favor selecciona un archivo CSV válido.',
    emptyFile: 'Archivo vacío',
    csvFileIsEmpty: 'El archivo CSV está vacío.',
    readError: 'Error de lectura',
    couldNotReadFile: 'No se pudo leer el archivo. Por favor intenta de nuevo.',
    csvEmptyOrNoData: 'El archivo CSV está vacío o no tiene datos.',
    missingRequiredColumnsMsg: 'Columnas requeridas faltantes: {columns}. Columnas encontradas: {found}',
    lineIncorrectColumnsMsg: 'Línea {line}: Número incorrecto de columnas (esperado {expected}, obtenido {got}). Valores: [{values}]',
    lineNameRequired: 'Línea {line}: El nombre es requerido',
    lineNameOnlyLetters: 'Línea {line}: El nombre "{name}" solo puede contener letras y espacios',
    linePhoneRequired: 'Línea {line}: El teléfono es requerido',
    linePhoneOnlyNumbers: 'Línea {line}: El teléfono "{phone}" solo puede contener números y el símbolo +',
    lineEmailInvalidFormat: 'Línea {line}: El email "{email}" no tiene un formato válido',
    lineCustomerAlreadyExists: 'Línea {line}: El cliente con teléfono {phone} ya existe',
    noData: 'Sin datos',
    fileContainsNoData: 'El archivo no contiene datos para importar.',
    validationErrors: 'Errores de validación',
    validationError: 'Error de validación',
    nameRequiredError: 'El nombre es obligatorio',
    nameInvalid: 'El nombre solo puede contener letras y espacios',
    phoneRequiredError: 'El teléfono es obligatorio',
    phoneInvalid: 'El teléfono solo puede contener números y los caracteres: + - ( ) espacio',
    emailInvalid: 'El formato del correo electrónico no es válido',
    customerAlreadyExists: 'Ya existe un cliente con este teléfono',
    errorsFoundMsg: 'Se encontraron {count} error(es). Revisa el archivo y corrige los errores.',
    partialImport: 'Importación parcial',
    validRecordsAndErrorsMsg: '{valid} registro(s) válido(s) y {errors} error(es) encontrado(s).',
    dataValidated: 'Datos validados',
    customersReadyToImportMsg: '{count} cliente(s) listo(s) para importar.',
    importSuccessful: 'Importación Exitosa',
    customersImportedMsg: 'Se importaron {count} cliente(s) exitosamente.',
    errorsFoundCount: 'Se encontraron {count} error(es):',
    editSelected: 'Editar {count} seleccionado(s)',
    editCustomer: 'Editar cliente',
    ordersPlus: '5+ pedidos',
    new: 'nuevo(s)',
    deliveryInstructions: 'Instrucciones del domicilio',
    customerDeleted: 'El cliente fue eliminado',
    importCSV: 'Importar CSV',
    exportCSV: 'Exportar CSV',
    
    // Settings
    generalSettings: 'Configuración General',
    regionalSettings: 'Configuración Regional',
    language: 'Idioma',
    currency: 'Moneda',
    businessHours: 'Horarios de Atención',
    deliverySettings: 'Configuración de Delivery',
    tableOrders: 'Pedidos en Mesa',
    qrCodes: 'Códigos QR',
    themeSettings: 'Configuración de Tema',
    socialMedia: 'Redes Sociales',
    notifications: 'Notificaciones',
    restaurantInfo: 'Información del Restaurante',
    contactInfo: 'Información de Contacto',
    businessInfo: 'Información del Negocio',
    operationalSettings: 'Configuración Operacional',
    minimumOrder: 'Pedido Mínimo',
    deliveryCost: 'Costo de Delivery',
    deliveryZones: 'Zonas de Delivery',
    numberOfTables: 'Número de Mesas',
    enableQRCodes: 'Habilitar Códigos QR',
    printAll: 'Imprimir Todos',
    downloadAll: 'Descargar Todos',
    mesa: 'Mesa',
    // TABS
    tab_general: 'General',
    tab_hours: 'Horarios',
    tab_social: 'Redes Sociales',
    tab_delivery: 'Delivery',
    tab_table_orders: 'Pedidos en Mesa',
    tab_promo: 'Promocional',
    tab_theme: 'Tema',
    tab_billing: 'Facturación',
    tab_support: 'Soporte',
    // TITLES & LABELS
    settings_title: 'Ajustes del Restaurante',
    save_button: 'Guardar Cambios',
    visual_identity_title: 'Identidad Visual',
    logo_subtitle: 'Logo de tu restaurante',
    no_logo: 'Sin logo',
    change_logo_button: 'Cambiar Logo',
    upload_logo_button: 'Subir Logo',
    delete_button: 'Eliminar',
    restaurant_info_title: 'Información del Restaurante',
    contact_location_subtitle: 'Información de contacto y ubicación',
    restaurant_name_label: 'Nombre del Restaurante',
    email_label: 'Correo Electrónico',
    phone_label: 'Teléfono',
    address_label: 'Dirección',
    description_label: 'Descripción',
    regional_settings_title: 'Ajustes Regionales',
    language_currency_subtitle: 'Idioma y moneda del sistema',
    language_label: 'Idioma',
    currency_label: 'Moneda',
    public_menu_title: 'Menú Público',
    public_menu_description: 'Comparte este enlace con tus clientes para que puedan ver tu menú y realizar pedidos',
    your_custom_url_label: 'Tu URL personalizada:',
    copy_button: 'Copiar',
    view_menu_button: 'Ver Menú',
    opening_hours_title: 'Horarios de Atención',
    opening_hours_subtitle: 'Configura los horarios en los que tu restaurante está abierto.',
    day_of_week_header: 'Día de la Semana',
    status_header: 'Estado',
    opening_time_header: 'Horario de Apertura',
    opening_time_label: 'Apertura',
    closing_time_label: 'Cierre',
    social_media_title: 'Redes Sociales',
    social_media_subtitle: 'Conecta tus redes sociales para aparecer en tu menú público',
    delivery_rates_title: 'Tarifas de Delivery',
    rate_name_label: 'Nombre de la Tarifa',
    coverage_radius_km_label: 'Radio de cobertura (km)',
    shipping_cost_cop_label: 'Costo de envío (COP)',
    min_order_value_cop_label: 'Valor mínimo de pedido (COP)',
    add_rate_button: 'Añadir Tarifa',
    table_orders_settings_title: 'Configuración de Pedidos en Mesa',
    number_of_tables_label: 'Número de Mesas',
    table_qr_codes_title: 'Códigos QR de Mesas',
    table_qr_codes_description: 'Los códigos QR permiten a los clientes acceder directamente al menú desde su mesa.',
    table_label: 'Mesa',
    download_png_button: 'Descargar PNG',
    print_qr_button: 'Imprimir QR',
    theme_customization_title: 'Personalización de Tema',
    theme_customization_subtitle: 'Configura los colores, tipografía y estilos de tu menú público',
    color_templates_title: 'Plantillas de Colores',
    color_templates_subtitle: 'Selecciona una plantilla predefinida o personaliza tus colores manualmente',
    manual_customization_title: 'Personalización Manual',
    primary_color_label: 'Color Principal del Tema',
    primary_color_hint: 'Botones, iconos y enlaces',
    menu_bg_color_label: 'Color de Fondo del Menú',
    menu_bg_color_hint: 'Fondo principal del menú',
    card_bg_color_label: 'Color de las Tarjetas y Fondo',
    card_bg_color_hint: 'Tarjetas de productos',
    primary_text_color_label: 'Color Texto Primario',
    primary_text_color_hint: 'Títulos y textos principales',
    secondary_text_color_label: 'Color Texto Secundario',
    secondary_text_color_hint: 'Descripciones y subtítulos',
    billing_settings_title: 'Configuración de Facturación',
    restaurant_info_billing_title: 'Información del Restaurante',
    commercial_name_label: 'Nombre Comercial *',
    social_reason_label: 'Razón Social *',
    nit_label: 'NIT *',
    tax_regime_label: 'Régimen Tributario *',
    iva_responsible_label: 'Responsable de IVA',
    has_dian_resolution_label: '¿Tiene Resolución DIAN?',
    department_label: 'Departamento *',
    city_label: 'Ciudad *',
    address_billing_label: 'Dirección *',
    phone_billing_label: 'Teléfono *',
    email_billing_label: 'Correo Electrónico *',
    dian_resolution_data_title: 'Datos de la Resolución DIAN',
    resolution_number_label: 'Número de Resolución *',
    resolution_date_label: 'Fecha de Resolución *',
    numbering_range_label: 'Rango de Numeración *',
    from_label: 'Desde',
    to_label: 'Hasta',
    tax_tip_settings_title: 'Configuración de Impuestos y Propina',
    suggested_tip_label: '¿Aplica Propina Sugerida?',
    ticket_customization_title: 'Personalización del Ticket',
    show_logo_on_ticket_label: '¿Mostrar logo en el ticket?',
    ticket_logo_label: 'Logo para el ticket',
    ticket_final_message_label: 'Mensaje Final del Ticket',
    promo_settings_title: 'Configuración Promocional',
    promo_settings_subtitle: 'Configura la imagen promocional y los productos destacados en tu menú público',
    vertical_promo_image_label: 'Imagen Promocional Vertical',
    vertical_promo_image_hint: 'Sube una imagen que aparecerá al hacer clic en el botón de promociones en el menú público',
    featured_products_title: 'Productos Destacados',
    featured_products_hint: 'Selecciona hasta 5 productos para mostrar en el carrusel de destacados',
    technical_support_title: 'Soporte Técnico',
    technical_support_subtitle: 'Crea un nuevo ticket de soporte o revisa el estado de los tickets existentes',
    create_new_ticket: 'Crear Nuevo Ticket de Soporte',
    subject_label: 'Asunto *',
    priority_label: 'Prioridad',
    category_label: 'Categoría',
    message_label: 'Mensaje *',
    contact_email_label: 'Email de Contacto',
    contact_phone_label: 'Teléfono de Contacto',
    send_ticket_button: 'Enviar Ticket',
    ticket_sent_title: 'Ticket Enviado',
    my_support_tickets_title: 'Mis Tickets de Soporte',
    id_header: 'ID',
    subject_header: 'Asunto',
    date_header: 'Fecha',
    view_details_button: 'Ver Detalles',
    clear_form_button: 'Limpiar Formulario',
    ticket_detail_modal_title: 'Detalle del Ticket',
    ticket_info_title: 'Información del Ticket',
    ticket_id_label: 'ID del Ticket',
    opened_by_label: 'Abierto por',
    creation_date_label: 'Fecha de Creación',
    last_update_label: 'Última Actualización',
    client_message_title: 'Mensaje del Cliente',
    admin_response_title: 'Respuesta del Administrador',
    additional_notes_title: 'Notas Adicionales',
    awaiting_response_title: 'Esperando Respuesta',
    awaiting_response_text: 'Tu ticket está siendo revisado por nuestro equipo. Te contactaremos pronto.',
    close_button: 'Cerrar',
    // STATUS/PRIORITY/CATEGORY
    status_pending: 'Pendiente',
    status_in_progress: 'En Progreso',
    status_resolved: 'Resuelto',
    status_closed: 'Cerrado',
    status_unknown: 'Desconocido',
    status_closed_simple: 'Cerrado',
    priority_urgent: 'Urgente',
    priority_high: 'Alta',
    priority_medium: 'Media',
    priority_low: 'Baja',
    category_general_name: 'Consulta General',
    category_technical_name: 'Problema Técnico',
    category_billing_name: 'Facturación',
    category_feature_name: 'Solicitud de Función',
    category_account_name: 'Cuenta y Configuración',
    category_other_name: 'Otro',
    enabled: 'Habilitado',
    disabled: 'Deshabilitado',
    regime_simple: 'Régimen Simple de Tributación',
    regime_common_iva: 'Régimen Común de IVA',
    // DAYS
    day_monday: 'Lunes',
    day_tuesday: 'Martes',
    day_wednesday: 'Miércoles',
    day_thursday: 'Jueves',
    day_friday: 'Viernes',
    day_saturday: 'Sábado',
    day_sunday: 'Domingo',
    // SOCIAL MEDIA
    social_facebook: 'Facebook',
    social_instagram: 'Instagram',
    social_twitter: 'Twitter / X',
    social_whatsapp: 'WhatsApp',
    social_youtube: 'Youtube',
    // TEMPLATES
    colorTemplate1: 'Azul Océano',
    colorTemplate2: 'Modo Nocturno',
    colorTemplate3: 'Jardín Natural',
    colorTemplate4: 'Rojo Oscuro',
    colorTemplate5: 'Atardecer Dorado',
    colorTemplate6: 'Océano Profundo',
    colorTemplate7: 'Rosa Vibrante',
    colorTemplate8: 'Noche Violeta',
    colorTemplate9: 'Bosque Nocturno',
    colorTemplate10: 'Naranja Energía',
    colorTemplate11: 'Lavanda Suave',
    colorTemplate12: 'Minimalista Dark',
    // Typography
    typography_title: 'Tipografía',
    primary_font_label: 'Fuente primaria',
    primary_font_hint: 'Fuente para body y textos generales',
    secondary_font_label: 'Fuente secundaria',
    secondary_font_hint: 'Para títulos y destacados',
    font_size_title_label: 'Tamaño título',
    font_size_subtitle_label: 'Tamaño subtítulo',
    font_size_normal_label: 'Tamaño normal',
    font_size_example_hint: 'Ej: 32px',
    // MESSAGES/HINTS/ERRORS
    config_saved_title: 'Configuración Guardada',
    changes_saved_success: 'Los cambios han sido guardados exitosamente.',
    error_title: 'Error',
    save_error_message: 'Hubo un problema al guardar la configuración.',
    support_send_error_message: 'Hubo un problema al enviar la solicitud de soporte.',
    file_too_large_title: 'Archivo muy grande',
    max_size_5mb_error: 'El tamaño máximo es 5MB',
    recommended_specs_title: 'Especificaciones recomendadas',
    accepted_formats_list: 'Formatos aceptados: JPG, PNG o GIF',
    optimal_dimensions_list: 'Dimensiones óptimas: 500x500px o superior',
    max_size_list: 'Tamaño máximo: 5MB',
    prefer_transparent_bg_list: 'Preferible fondo transparente (PNG)',
    restaurant_name_placeholder: 'Ej: Restaurante El Buen Sabor',
    email_placeholder: 'contacto@restaurante.com',
    required_for_whatsapp: 'Necesario para recibir pedidos por WhatsApp',
    address_placeholder: 'Calle 123 #45-67, Bogotá',
    description_placeholder: 'Describe tu restaurante: especialidad, ambiente, historia, qué te hace único...',
    max_500_chars_hint: 'Máximo 500 caracteres',
    language_es_option: '🇪🇸 Español',
    language_en_option: '🇺🇸 English',
    language_selector_hint: 'Define el idioma de la interfaz de administración',
    currency_cop_option: '🇨🇴 Peso Colombiano (COP)',
    currency_usd_option: '🇺🇸 Dólar (USD)',
    currency_eur_option: '🇪🇺 Euro (EUR)',
    currency_mxn_option: '🇲🇽 Peso Mexicano (MXN)',
    currency_ars_option: '🇦🇷 Peso Argentino (ARS)',
    currency_clp_option: '🇨🇱 Peso Chileno (CLP)',
    currency_pen_option: '🇵🇪 Sol Peruano (PEN)',
    currency_selector_hint: 'Moneda para mostrar precios en tu menú',
    copied_title: 'Copiado',
    url_copied_success: 'URL copiada al portapapeles',
    hours_hint_public_menu: 'Los horarios se muestran en tu menú público',
    hours_hint_open_closed: 'Los clientes verán si estás abierto o cerrado',
    hours_hint_different_days: 'Puedes configurar diferentes horarios para cada día',
    about_social_media_title: 'Sobre las redes sociales:',
    social_hint_footer: 'Los enlaces aparecerán en el footer de tu menú público',
    social_hint_full_urls: 'Asegúrate de usar URLs completas (https://...)',
    social_hint_whatsapp_format: 'Para WhatsApp, usa el formato internacional (+código país + número)',
    social_hint_icons: 'Los iconos se mostrarán automáticamente según la red social',
    rate_value_number_error: 'El valor de la tarifa debe ser un número.',
    important_qr_info_title: 'Información importante sobre QR:',
    qr_hint_unique_code: 'Cada mesa tendrá su propio código QR único',
    qr_hint_scan_to_menu: 'Los clientes escanean el código para acceder al menú',
    qr_hint_table_auto_detect: 'El número de mesa se detecta automáticamente',
    qr_hint_print_download: 'Puedes imprimir y descargar cada código QR individualmente',
    about_customization_title: 'Sobre la personalización:',
    theme_hint_auto_apply: 'Los cambios se aplicarán automáticamente en tu menú público',
    theme_hint_preview: 'Puedes previsualizar los cambios guardando la configuración',
    theme_hint_contrast: 'Asegúrate de que los colores tengan buen contraste para legibilidad',
    theme_hint_font_css: 'Los tamaños de fuente aceptan valores CSS (px, rem, em)',
    field_required_error: 'Este campo es obligatorio.',
    nit_invalid_error: 'El NIT no es válido.',
    select_department_first_hint: 'Selecciona primero el departamento',
    ticket_final_message_placeholder: 'Ej: Gracias por tu compra! Vuelve pronto.',
    notes_about_billing_title: 'Notas sobre Facturación:',
    billing_hint_legal_tickets: 'Importante para la generación de tickets de pedido legalmente válidos en Colombia',
    billing_hint_iva_calc: 'Si eres responsable de IVA, el IVA se calculará y mostrará en cada ticket',
    billing_hint_dian_fe: 'La resolución DIAN es requerida para facturación electrónica',
    billing_hint_tip_optional: 'La propina es opcional y aparecerá como sugerencia al cliente',
    billing_hint_keep_updated: 'Asegúrate de mantener esta información actualizada',
    max_5_products_error: 'Máximo 5 productos seleccionados',
    message_placeholder: 'Tu mensaje detallado...',
    ticket_sent_success_message: 'Tu solicitud de soporte ha sido enviada con éxito. Te responderemos lo antes posible.',
    admin_no_response_yet: 'El administrador aún no ha respondido a este ticket.',
    select_department: 'Selecciona un Departamento',
    select_city: 'Selecciona una Ciudad',
    view_offers: 'Ver Ofertas', // Added missing key from initial state
    actions_header: 'Acciones',
    // Placeholders for social media, added for completeness
    facebook_placeholder: 'https://facebook.com/tu-restaurante',
    instagram_placeholder: 'https://instagram.com/tu-restaurante',
    twitter_placeholder: 'https://twitter.com/tu-restaurante',
    whatsapp_placeholder: '+57 300 123 4567',
    youtube_placeholder: 'https://youtube.com/tu-canal',
    tiktok_placeholder: 'https://tiktok.com/@tu-restaurante',
    website_label: 'Sitio Web',
    website_placeholder: 'https://tu-restaurante.com',
    // Additional Settings Strings
    config_hours_subtitle: 'Configura los horarios de atención de tu restaurante',
    preparation_time_title: 'Tiempo de Preparación',
    prep_time_label: 'Tiempo estimado de preparación',
    prep_time_placeholder: 'Ej: 30-45 minutos',
    prep_time_hint: 'Este es el tiempo que se mostrará a los clientes como estimación de preparación de sus pedidos',
    opening_hours_section: 'Horarios de Atención',
    hours_open_label: 'Apertura',
    hours_close_label: 'Cierre',
    important_info: 'Información importante:',
    hours_show_public: 'Los horarios se muestran en tu menú público',
    hours_show_status: 'Los clientes verán si estás abierto o cerrado',
    hours_different_days: 'Puedes configurar diferentes horarios para cada día',
    about_social_media: 'Sobre las redes sociales:',
    social_footer_hint: 'Los enlaces aparecerán en el footer de tu menú público',
    social_full_urls: 'Asegúrate de usar URLs completas (https://...)',
    social_whatsapp_format: 'Para WhatsApp, usa el formato internacional (+código país + número)',
    social_auto_icons: 'Los iconos se mostrarán automáticamente según la red social',
    rate_name_placeholder: 'Estándar, Express, Premium...',
    min_order_label: 'Pedido Mínimo ($)',
    max_order_label: 'Pedido Máximo ($)',
    shipping_cost_label: 'Costo ($)',
    rate_value_error: 'El valor de la tarifa debe ser un número.',
    table_settings_title: 'Configuración de Pedidos en Mesa',
    qr_codes_title: 'Códigos QR de Mesas',
    qr_codes_description: 'Los códigos QR permiten a los clientes acceder directamente al menú desde su mesa.',
    important_qr_info: 'Información importante sobre QR:',
    qr_unique_code: 'Cada mesa tendrá su propio código QR único',
    qr_scan_menu: 'Los clientes escanean el código para acceder al menú',
    qr_auto_detect: 'El número de mesa se detecta automáticamente',
    qr_print_download: 'Puedes imprimir y descargar cada código QR individualmente',
    menu_bg_label: 'Color de Fondo del Menú',
    menu_bg_hint: 'Fondo principal del menú',
    card_bg_label: 'Color de las Tarjetas y Fondo',
    card_bg_hint: 'Tarjetas de productos',
    primary_text_label: 'Color Texto Primario',
    primary_text_hint: 'Títulos y textos principales',
    secondary_text_label: 'Color Texto Secundario',
    secondary_text_hint: 'Descripciones y subtítulos',
    about_customization: 'Sobre la personalización:',
    theme_auto_apply: 'Los cambios se aplicarán automáticamente en tu menú público',
    theme_preview: 'Puedes previsualizar los cambios guardando la configuración',
    theme_contrast: 'Asegúrate de que los colores tengan buen contraste para legibilidad',
    theme_font_css: 'Los tamaños de fuente aceptan valores CSS (px, rem, em)',

    // Analytics
    totalRevenue: 'Ingresos Totales',
    averageTicket: 'Ticket Promedio',
    monthlyOrders: 'Pedidos por Mes',
    ordersByType: 'Pedidos por Tipo',
    ordersByStatus: 'Estados de Pedidos',
    topProducts: 'Productos Más Vendidos',
    recentActivity: 'Actividad Reciente',
    filterByDates: 'Filtrar por Fechas',
    from: 'Desde',
    to: 'Hasta',
    clearFilters: 'Limpiar Filtros',
    showingDataFrom: 'Mostrando datos desde',
    until: 'hasta',
    today: 'hoy',
    notEnoughData: 'No hay datos suficientes para mostrar',
    noSalesYet: 'No hay ventas registradas aún',
    sold: 'vendidos',
    analyticsToastNoData: "No hay datos para exportar con los filtros actuales.",
    analyticsToastExportSuccess: "Reporte de estadísticas exportado exitosamente.",
    csvReportTitle: "REPORTE DE ESTADÍSTICAS",
    csvRestaurantLabel: "Restaurante",
    csvGenerationDate: "Fecha de Generación",
    csvPeriodLabel: "Período Analizado",
    csvAllPeriods: "Todos los Períodos",
    csvExecutiveSummary: "RESUMEN EJECUTIVO",
    csvTotalOrders: "Total de Pedidos",
    csvCompletedOrders: "Pedidos Completados",
    csvCancelledOrders: "Pedidos Cancelados",
    csvCompletionRate: "Tasa de Finalización",
    csvTotalRevenue: "Ingresos Totales",
    csvAverageTicket: "Ticket Promedio",
    csvOrderTypeDistribution: "DISTRIBUCIÓN POR TIPO DE PEDIDO",
    csvOrderStatusDistribution: "DISTRIBUCIÓN POR ESTADO",
    orderTypePickup: "Recoger en Local",
    orderTypeDelivery: "Domicilio",
    orderTypeTable: "En Mesa",
    orderStatusPendingPlural: "Pedidos Pendientes",
    orderStatusConfirmedPlural: "Pedidos Confirmados",
    orderStatusPreparing: "En Preparación",
    orderStatusReadyPlural: "Pedidos Listos",
    orderStatusDeliveredPlural: "Pedidos Entregados",
    orderStatusCancelledPlural: "Pedidos Cancelados",
    csvTopSellingProducts: "PRODUCTOS MÁS VENDIDOS",
    csvPosition: "Posición",
    csvProduct: "Producto",
    csvQuantitySold: "Cantidad Vendida",
    csvRevenue: "Ingreso",
    csvSalesByCategory: "VENTAS POR CATEGORÍA",
    csvCategory: "Categoría",
    csvProductCount: "Cantidad de Productos",
    csvNoCategory: "Sin Categoría",
    csvSalesByDay: "VENTAS POR DÍA DE LA SEMANA",
    csvDay: "Día",
    csvOrderCount: "Cant. Pedidos",
    daySunday: "Domingo",
    dayMonday: "Lunes",
    dayTuesday: "Martes",
    dayWednesday: "Miércoles",
    dayThursday: "Jueves",
    dayFriday: "Viernes",
    daySaturday: "Sábado",
    csvOrderDetails: "DETALLE COMPLETO DE PEDIDOS",
    csvOrderNumber: "N° Pedido",
    csvDate: "Fecha",
    csvTime: "Hora",
    csvCustomer: "Cliente",
    csvPhone: "Teléfono",
    csvEmail: "Email",
    csvOrderType: "Tipo de Pedido",
    csvStatus: "Estado",
    csvSubtotal: "Subtotal",
    csvDeliveryCost: "Costo Envío",
    csvTotal: "Total",
    csvPaymentMethod: "Método de Pago",
    csvItems: "Items",
    csvSpecialNotes: "Notas Especiales",
    csvItemsSoldDetails: "DETALLE DE ITEMS VENDIDOS",
    csvVariation: "Variación",
    csvUnitPrice: "Precio Unitario",
    fileNameRestaurantDefault: "Restaurante",
    fileNamePrefixFrom: "Desde",
    fileNamePrefixUntil: "Hasta",
    analyticsPageTitle: "Estadísticas del Restaurante",
    btnExportCSV: "Exportar CSV",
    btnAdvancedFilters: "Filtros Avanzados",
    filterDateRange: "Rango de Fechas",
    filterDateStart: "Fecha de inicio",
    filterDateUntil: "Fecha de fin",
    filterCategory: "Filtrar por Categoría",
    filterAllCategories: "Todas las categorías",
    filterOrderType: "Filtrar por Tipo de Pedido",
    filterAllTypes: "Todos los tipos",
    filterStatus: "Filtrar por Estado",
    filterAllStatuses: "Todos los estados",
    filterActiveLabel: "Filtros Activos",
    filterDateStartShort: "Inicio",
    filterDateToday: "Hoy",
    btnClearAllFilters: "Limpiar Todos los Filtros",
    filterSummaryShowing: "Mostrando",
    filterSummaryOrderPlural: "pedidos",
    filterSummaryOrderSingular: "pedido",
    filterSummaryMatchingFilters: "que coinciden con los filtros.",
    filterSummaryInTotal: "en total.",
    analyticsLastUpdated: "Última actualización",
    statTotalOrders: "Total de Pedidos",
    statCompletedSubtitle: "completados",
    statTotalRevenue: "Ingresos Totales",
    statDeliveredOrdersSubtitle: "de pedidos entregados",
    statAverageTicket: "Ticket Promedio",
    statPerOrderSubtitle: "por pedido entregado",
    statActiveProducts: "Productos Activos",
    statOf: "de",
    statTotal: "total",
    chartOrdersByType: "Distribución por Tipo de Pedido",
    chartOrdersByMonth: "Pedidos por Mes (Últimos 6)",
    chartNoData: "No hay datos disponibles para el rango de fechas seleccionado.",
    chartOrderStatus: "Distribución por Estado de Pedido",
    orderStatusPending: "Pendiente",
    orderStatusConfirmed: "Confirmado",
    orderStatusReady: "Listo",
    orderStatusDelivered: "Entregado",
    orderStatusCancelled: "Cancelado",
    orderStatusUnknown: "Desconocido",
    chartTopProductsTitle: 'Productos Más Vendidos',
    chartNoProducts: 'No hay ventas registradas aún',
    unitsSold: 'vendidos',
    recentOrdersTitle: 'Pedidos Recientes',
    customerUnknown: 'N/A',
    
    // Subscription
    subscriptionPlans: 'Planes de Suscripción',
    choosePlan: 'Elige el plan que mejor se adapte a las necesidades de tu restaurante',
    currentPlan: 'Plan Actual',
    planActivated: '¡Plan Activado!',
    freePlan: 'Gratis',
    basicPlan: 'Basic',
    proPlan: 'Pro',
    businessPlan: 'Business',
    mostPopular: 'Más Popular',
    unlimited: 'ilimitados',
    upTo: 'Hasta',
    advancedStats: 'Estadísticas avanzadas',
    customDomain: 'Dominio personalizado',
    prioritySupport: 'Soporte prioritario',
    advancedCustomization: 'Personalización avanzada',
    perfectToStart: 'Perfecto para empezar',
    forGrowingRestaurants: 'Para restaurantes en crecimiento',
    forChainsAndFranchises: 'Para cadenas y franquicias',
    needHelp: '¿Necesitas ayuda para elegir?',
    allPlansInclude: 'Todos los planes incluyen acceso completo a nuestro sistema de gestión de menús y pedidos.',
    canChangeAnytime: 'Puedes cambiar de plan en cualquier momento.',
    
    // Public Menu
    addToCart: 'Agregar al Carrito',
    cart: 'Carrito',
    checkout: 'Finalizar Pedido',
    yourOrder: 'Tu Pedido',
    cartEmpty: 'Tu carrito está vacío',
    addProductsToStart: 'Agrega algunos productos para comenzar',
    proceedToCheckout: 'Proceder al Checkout',
    orderConfirmed: '¡Pedido Confirmado!',
    orderSent: '¡Tu pedido ha sido enviado!',
    willContactSoon: 'Hemos enviado tu pedido por WhatsApp al restaurante. Te contactarán pronto para confirmar.',
    continue: 'Continuar',
    finalizeOrder: 'Finalizar Pedido',
    orderTypeSelection: 'Tipo de Pedido',
    pickupAtRestaurant: 'En el restaurante',
    tableOrder: 'Pedido en mesa',
    selectTable: 'Seleccionar Mesa',
    fullName: 'Nombre Completo',
    optionalEmail: 'Email (opcional)',
    completeAddress: 'Dirección Completa',
    productActivatedTitle: 'Producto activado',
    productActivatedMessage: 'El producto ha sido activado y ahora aparece en tu menú público.',
    productCreatedTitle: 'Producto creado',
    productCreatedMessage: 'El nuevo producto ha sido agregado a tu menú.',
    productUpdatedTitle: 'Producto actualizado',
    productUpdatedMessage: 'El producto ha sido actualizado correctamente.',
    productDeletedTitle: 'Producto eliminado',
    productDeletedMessage: 'El producto ha sido eliminado de tu menú.',
    productDuplicatedTitle: 'Producto duplicado',
    productDuplicatedMessage: 'Se ha creado una copia de "{{name}}".',
    productArchivedTitle: 'Producto archivado',
    productArchivedMessage: 'El producto ha sido archivado y ya no aparece en tu menú público.',
    orderUpdatedMessage: 'La posición del producto ha sido actualizada.',
    productsReorderedMessage: 'Los productos han sido reordenados correctamente.',
    productLimitTitle: 'Límite de productos alcanzado',
    productLimitMessage: 'Tu plan actual solo permite {{limit}} productos. Actualiza tu plan para agregar más.',
    productsAllowed: 'productos permitidos',
    upgradePlanToAddMore: 'Actualiza tu plan para agregar más.',
    unknown: 'Desconocido',
    unknownCategory: 'Categoría desconocida',
    copyLabel: 'Copia',
    searchPlaceholder: 'Buscar productos por nombre, descripción o SKU...',
    all: 'Todas',
    tipLabel: 'Consejo',
    dragToReorder: 'Arrastra y suelta los productos para reordenarlos',
    noProductsFound: 'No se encontraron productos',
    createFirstProduct: 'Crea tu primer producto para comenzar.',
    clearSearch: 'Limpiar búsqueda',
    noImage: 'Sin imagen',
    offer: 'OFERTA',
    moveUp: 'Mover arriba',
    moveDown: 'Mover abajo',
    editProduct: 'Editar producto',
    duplicateProduct: 'Duplicar producto',
    activateProduct: 'Activar producto',
    archiveProduct: 'Archivar producto',
    deleteProduct: 'Eliminar producto',
    deleteProductQuestion: '¿Eliminar producto?',
    deleteProductWarning: 'Esta acción eliminará permanentemente el producto de tu menú. Los clientes ya no podrán verlo ni pedirlo.',
      
    // Days of week
    monday: 'Lunes',
    tuesday: 'Martes',
    wednesday: 'Miércoles',
    thursday: 'Jueves',
    friday: 'Viernes',
    saturday: 'Sábado',
    sunday: 'Domingo',
    
    // Months
    january: 'Enero',
    february: 'Febrero',
    march: 'Marzo',
    april: 'Abril',
    may: 'Mayo',
    june: 'Junio',
    july: 'Julio',
    august: 'Agosto',
    september: 'Septiembre',
    october: 'Octubre',
    november: 'Noviembre',
    december: 'Diciembre',
    
    // Time
    open: 'Abierto',
    closed: 'Cerrado',
    openNow: 'Abierto ahora',
    closedNow: 'Cerrado',
    hours: 'horas',
    minutes: 'minutos',
    
    // Errors and Messages
    error: 'Error',
    success: 'Éxito',
    warning: 'Advertencia',
    info: 'Información',
    required: 'obligatorio',
    invalidEmail: 'Email inválido',
    passwordTooShort: 'La contraseña debe tener al menos 6 caracteres',
    passwordsDontMatch: 'Las contraseñas no coinciden',
    userNotFound: 'Usuario no encontrado',
    incorrectPassword: 'Contraseña incorrecta',
    emailAlreadyRegistered: 'El email ya está registrado',
    registrationSuccessful: '¡Registro Exitoso!',
    accountPendingApproval: 'Tu cuenta está pendiente de aprobación por nuestro equipo.',
    unexpectedError: 'Error inesperado',
    confirmDelete: '¿Estás seguro de que quieres eliminar',
    actionCannotBeUndone: 'Esta acción no se puede deshacer.',
    
    // Limits and Restrictions
    productLimitReached: 'Límite de Productos Alcanzado',
    categoryLimitReached: 'Límite de Categorías Alcanzado',
    upgradeSubscription: 'Actualiza tu suscripción',
    addMoreProducts: 'para agregar más productos.',
    addMoreCategories: 'para agregar más categorías.',
    
    // Super Admin
    superAdminPanel: 'Panel de Superadministrador',
    superAdminDashboard: 'Dashboard Principal',
    restaurantsManagement: 'Gestión de Restaurantes',
    usersManagement: 'Gestión de Usuarios',
    subscriptionsManagement: 'Gestión de Suscripciones',
    systemStatistics: 'Estadísticas del Sistema',
  },
  
  en: {
    // Common
    save: 'Save',
    cancel: 'Cancel',
    edit: 'Edit',
    delete: 'Delete',
    create: 'Create',
    update: 'Update',
    loading: 'Loading',
    search: 'Search',
    filter: 'Filter',
    actions: 'Actions',
    status: 'Status',
    date: 'Date',
    name: 'Name',
    description: 'Description',
    email: 'Email',
    phone: 'Phone',
    address: 'Address',
    total: 'Total',
    subtotal: 'Subtotal',
    yes: 'Yes',
    no: 'No',
    close: 'Close',
    view: 'View',
    print: 'Print',
    download: 'Download',
    active: 'Active',
    inactive: 'Inactive',
    pending: 'Pending',
    confirmed: 'Confirmed',
    preparing: 'Preparing',
    ready: 'Ready',
    delivered: 'Delivered',
    cancelled: 'Cancelled',
    
    // Navigation
    dashboard: 'Dashboard',
    categories: 'Categories',
    menu: 'Menu',
    orders: 'Orders',
    customers: 'Customers',
    subscription: 'Subscription',
    settings: 'Settings',
    analytics: 'Analytics',

    // Terms and Conditions
    termsSection1Title: string;
    termsSection1Content: string;
    termsSection2Title: string;
    termsSection2Content: string;
    termsSection2Item1: string;
    termsSection2Item2: string;
    termsSection2Item3: string;
    termsSection2Item4: string;
    termsSection2Item5: string;
    termsSection3Title: string;
    termsSection3Content: string;
    termsSection3Item1: string;
    termsSection3Item2: string;
    termsSection3Item3: string;
    termsSection3Item4: string;
    termsSection4Title: string;
    termsSection4Content: string;
    termsSection4Item1: string;
    termsSection4Item2: string;
    termsSection4Item3: string;
    termsSection4Item4: string;
    termsSection5Title: string;
    termsSection5Content: string;
    termsSection5Item1: string;
    termsSection5Item2: string;
    termsSection5Item3: string;
    termsSection5Item4: string;
    termsSection5Item5: string;
    termsSection5Item6: string;
    termsSection6Title: string;
    termsSection6Content1: string;
    termsSection6Content2: string;
    termsSection7Title: string;
    termsSection7Content: string;
    termsSection7Item1: string;
    termsSection7Item2: string;
    termsSection7Item3: string;
    termsSection7Content2: string;
    termsSection8Title: string;
    termsSection8Content: string;
    termsSection8Item1: string;
    termsSection8Item2: string;
    termsSection8Item3: string;
    termsSection8Content2: string;
    termsSection9Title: string;
    termsSection9Content: string;
    termsSection9Item1: string;
    termsSection9Item2: string;
    termsSection9Item3: string;
    termsSection9Item4: string;
    termsSection10Title: string;
    termsSection10Content: string;
    termsSection10Item1: string;
    termsSection10Item2: string;
    termsSection10Item3: string;
    termsSection10Item4: string;
    termsSection11Title: string;
    termsSection11Content: string;
    termsSection12Title: string;
    termsSection12Content: string;
    termsSection13Title: string;
    termsSection13Item1Label: string;
    termsSection13Item1: string;
    termsSection13Item2Label: string;
    termsSection13Item2: string;
    termsSection13Item3Label: string;
    termsSection13Item3: string;
    termsSection13Item4Label: string;
    termsSection13Item4: string;
    termsSection14Title: string;
    termsSection14Content: string;
    termsSection14Item1: string;
    termsSection14Item2: string;
    termsLastUpdate: string;
    termsLastUpdateDate: string;
    termsAcceptDisclaimer: string;
    acceptTermsAndConditionsButton: string;

    // Auth Context Errors
    userNotFound: 'User not found',
    incorrectPassword: 'Incorrect password',
    restaurantNotFoundForUser: 'Restaurant not found for this user',
    noRestaurantAssigned: 'You do not have a restaurant assigned. Contact the administrator.',
    emailAlreadyRegistered: 'Email is already registered',
    noAccountFoundWithEmail: 'No account found with that email',
    passwordRecoveryRequest: 'Password recovery request',
    passwordRecoveryMessage: 'has requested to recover their password.',
    userRole: 'User role',
    requestDate: 'Request date',
    userWithoutRestaurant: 'User without restaurant',
    noName: 'No name',
    notAvailable: 'Not available',

    
    // Auth
    login: 'Login',
    register: 'Register',
    logout: 'Logout',
    loginTitle: 'Login',
    loginSubtitle: 'Access your admin panel',
    registerTitle: 'Register your Restaurant',
    registerSubtitle: 'Complete the information to create your account',
    password: 'Password',
    confirmPassword: 'Confirm Password',
    forgotPassword: '¿Forgot your password?', 
    noAccount: 'Do not have an account?',
    restaurantName: 'Restaurant Name',
    ownerName: 'Owner Name',
    acceptTerms: 'I accept the terms and conditions',
    backToLogin: 'Back to Login',
    demoAccounts: 'Demo accounts:',
    superadmin: 'Superadmin',
    restaurant: 'Restaurant',
    authPageSubtitle: 'Complete Restaurant Management System',
    authPageTitle: 'Transform your restaurant management',
    authPageDescription: 'The all-in-one platform you need to modernize your business and increase your sales',
    featureDigitalMenu: 'Digital Menu',
    featureDigitalMenuDesc: 'Online catalog with QR code',
    featureMoreSales: 'More Sales',
    featureMoreSalesDesc: 'Increase your revenue up to 40%',
    featureRealTimeAnalytics: 'Real-Time Analytics',
    featureRealTimeAnalyticsDesc: 'Detailed reports and statistics',
    featureOrderManagement: 'Order Management',
    featureOrderManagementDesc: 'Total and efficient control',
    featureCustomerBase: 'Customer Base',
    featureCustomerBaseDesc: 'Loyalty and better knowledge of your customers',
    featureQuickSetup: 'Quick Setup',
    featureQuickSetupDesc: 'Ready in less than 10 minutes',
    featurePOSBilling: 'POS Billing',
    featurePOSBillingDesc: 'Integrated point-of-sale system',
    featureRealTimeTracking: 'Real-Time Tracking',
    featureRealTimeTrackingDesc: 'Customers track their orders instantly',
    statActiveRestaurants: 'Active Restaurants',
    statOrdersProcessed: 'Orders Processed',
    statSatisfaction: 'Satisfaction',
    requestSent: 'Request submitted!',
    requestInfo: 'We have received your password recovery request.',
    requestResponse: 'Our team will contact you by email.',
    recoverPassword: 'Recover Password',
    recoverPasswordInstructions: 'Enter your email address and we will contact you to help you recover access to your account.',
    helpReactivateAccount: 'to help you reactivate your account.',
    emailPlaceholder: 'your@email.com',
    sendRequest: 'Send Request',
    requestSendError: 'Error sending the request',

    // Register Form
    restaurantNameRequired: 'Restaurant name is required',
    emailRequired: 'Email is required',
    passwordRequired: 'Password is required',
    mustAcceptTerms: 'You must accept the terms and conditions',
    registerError: 'Registration error',
    contactEmail: 'Contact Email',
    restaurantAddress: 'Restaurant Address',
    minimumCharacters: 'Minimum 6 characters',
    repeatPassword: 'Repeat your password',
    termsAndConditions: 'terms and conditions',
    ofService: 'of service',
    createAccount: 'Create Account',
    termsModalTitle: 'Platyo Terms and Conditions',
    restaurantNamePlaceholder: 'My Restaurant',
    ownerNamePlaceholder: 'John Doe',
    contactEmailPlaceholder: 'contact@myrestaurant.com',
    phonePlaceholder: '+1 (555) 123-4567',
    addressPlaceholder: '123 Main St, City',

    // Change Password Modal
    changePasswordRequired: 'Password Change Required',
    provisionalPasswordDetected: 'Provisional password detected.',
    securityPasswordChange: 'For security reasons, you must change your password before continuing. This password will be permanent and you can use it for future logins.',
    newPassword: 'New Password',
    confirmNewPassword: 'Confirm New Password',
    changePassword: 'Change Password',
    writePasswordAgain: 'Write the password again',


    // Dashboard
    totalProducts: 'Products',
    activeProducts: 'active',
    todayOrders: 'Today Orders',
    totalSales: 'Total Sales',
    recentOrders: 'Recent Orders',
    restaurantStatus: 'Restaurant Status',
    lastUpdate: 'Last update',
    noOrdersYet: 'No orders yet',
    ordersWillAppear: 'Orders will appear here once customers start ordering.',
    noSubscription: 'No subscription',
    btnTutorial: 'Tutorial',
    statTotalSubtitle: 'total',
    statCurrentMonthSubtitle: 'Current Month',
    statusMenuUrl: 'Menu URL',
    statusSubscription: 'Subscription',
    statusTableService: 'Table Service',
    na: 'N/A',
    orderTable: 'Table',
    
    // Orders
    orderManagement: 'Order Management',
    orderNumber: 'Order',
    customer: 'Customer',
    orderType: 'Type',
    pickup: 'Pickup',
    delivery: 'Delivery',
    table: 'Table',
    completedToday: 'Completed Today',
    inPreparation: 'In Preparation',
    printTicket: 'Print Ticket',
    confirmOrder: 'Confirm',
    cancelOrder: 'Cancel',
    nextStep: 'Next Step',
    customerInfo: 'Customer Information',
    products: 'Products',
    orderSummary: 'Order Summary',
    specialInstructions: 'Special Instructions',
    deliveryAddress: 'Delivery Address',
    references: 'References',
    estimatedTime: 'Estimated time',
    thankYouOrder: 'Thank you for your order!',
    statusUpdatedTitle: 'Status Updated',
    orderStatusUpdated: 'Order status updated',
    orderTypeTitle: 'Order type',
    orderStatusMarkedSuccess: 'The order status has been updated.',
    orderConfirmedMsg: 'Order confirmed',
    orderInPreparationMsg: 'Order in preparation',
    orderReadyForDeliveryMsg: 'Order ready for delivery',
    orderDeliveredMsg: 'Order delivered',
    orderCancelledMsg: 'Order cancelled',
    actionConfirm: 'Confirm',
    actionPrepare: 'Prepare',
    actionMarkReady: 'Mark Ready',
    actionDeliver: 'Deliver',
    bulkActionCompleteTitle: 'Bulk Action Complete',
    ordersUpdatedCount: 'orders updated',
    orderLabel: 'Order',
    productsTitle: 'Products',
    productHeader: 'Product',
    variationLabel: 'Variation',
    quantityHeader: 'Quantity',
    priceHeader: 'Price',
    noteLabel: 'Note',
    deliveryLabel: 'Delivery',
    specialInstructionsTitle: 'Special Instructions',
    restaurantDefaultName: 'Restaurant',
    newOrderTitle: 'NEW ORDER',
    orderNumberLabel: 'Order #',
    customerSectionTitle: 'CUSTOMER',
    deliveryReferencesLabel: 'References',
    tableLabel: 'Table',
    orderSummaryTitle: 'ORDER SUMMARY',
    estimatedTimeLabel: 'Estimated time',
    defaultPreparationTime: '30-45 minutes',
    thankYouForOrder: 'Thank you for your order!',
    orderUpdateTitle: 'ORDER UPDATE',
    statusPendingMessage: 'is *PENDING* confirmation',
    statusConfirmedMessage: 'has been *CONFIRMED* and will be processed soon',
    statusPreparingMessage: 'is in *PREPARATION*',
    statusReadyMessage: 'is *READY* for delivery/pickup',
    statusDeliveredMessage: 'has been *DELIVERED*',
    statusCancelledMessage: 'has been *CANCELLED*',
    readyForPickup: 'Your order is ready for pickup.',
    weAreWaitingForYou: 'We are waiting for you!',
    readyForDelivery: 'Your order is ready and will be delivered soon.',
    preparingWithCare: 'We are preparing your order with great care.',
    thankYouForPreference: 'Thank you for your preference!',
    errorTitle: 'Error',
    noPhoneError: 'The order does not have an associated phone number',
    invalidPhoneError: 'The phone number is not valid. It must have at least 10 digits.',
    warningTitle: 'Warning',
    popupWarning: 'Please allow pop-ups to open WhatsApp',
    successTitle: 'Success',
    openingWhatsapp: 'Opening WhatsApp...',
    whatsappOpenError: 'Could not open WhatsApp. Please try again.',
    ticketTitle: 'Ticket',
    dianResolutionNumber: 'DIAN Resolution N°',
    rangeLabel: 'Range',
    taxRegimeSimple: 'Simple Regime',
    taxRegimeCommon: 'Common Regime',
    taxRegimeNoIva: 'Not VAT responsible',
    deliveryOrderType: 'Delivery',
    pickupOrderType: 'Takeaway',
    tableOrderType: 'Table',
    ivaLabel: 'VAT (19%)',
    suggestedTipLabel: 'Suggested Tip (10%)',
    totalWithTipLabel: 'Total with tip',
    thankYouForPurchase: 'Thank you for your purchase!',
    createOrder: 'Create Order',
    bulkActions: 'Bulk Actions',
    filtersTitle: 'Filters',
    ordersToday: 'Orders Today',
    dailySales: 'Daily Sales',
    inProcess: 'In Process',
    averageValue: 'Average Value',
    completedOrders: 'Completed Orders',
    completionRate: 'Completion Rate',
    totalOrders: 'Total Orders',
    bulkActionLabel: 'Bulk Action',
    selectActionPlaceholder: 'Select action',
    markAsConfirmed: 'Mark as confirmed',
    markAsPreparing: 'Mark as in preparation',
    markAsReady: 'Mark as ready',
    markAsDelivered: 'Mark as delivered',
    apply: 'Apply',
    pendingPlural: 'Pending',
    confirmedPlural: 'Confirmed',
    preparingPlural: 'In preparation',
    readyPlural: 'Ready',
    deliveredPlural: 'Delivered',
    cancelledPlural: 'Cancelled',
    allTypes: 'All types',
    yesterday: 'Yesterday',
    lastWeek: 'Last week',
    lastMonth: 'Last month',
    customRange: 'Custom range',
    sortByLabel: 'Sort by...',
    noOrdersRegistered: 'No orders registered',
    noOrdersFound: 'No orders found',
    noOrdersMessage: 'Orders will appear here once customers start ordering.',
    adjustFiltersMessage: 'Try adjusting the search filters.',
    sendByWhatsappTitle: 'Send via WhatsApp',
    changeToTitle: 'Change to:',
    previous: 'Previous',
    next: 'Next',
    showing: 'Showing',
    of: 'of',
    results: 'results',
    orderInfoTitle: 'Order Information',
    customerInfoTitle: 'Customer Information',
    nameRequiredLabel: 'Name *',
    customerNamePlaceholder: 'Customer name',
    phoneRequiredLabel: 'Phone *',
    customerPhonePlaceholder: 'Customer phone',
    customerEmailPlaceholder: 'Customer email',
    customerAddressPlaceholder: 'Customer address',
    deliveryAddressLabel: 'Delivery Address',
    deliveryAddressPlaceholder: 'Full delivery address',
    deliveryReferencesPlaceholder: 'References to find the address',
    tableNumberLabel: 'Table Number',
    tableNumberPlaceholder: 'Table number',
    specialInstructionsLabel: 'Special Instructions',
    specialInstructionsPlaceholder: 'Special instructions for the order...',
    saveOrder: 'Save Order',
    updateOrder: 'Update Order',
    deleteOrder: 'Delete Order',
    confirmDeleteOrder: 'Are you sure you want to delete the order',
    irreversibleAction: 'This action is irreversible.',
    namePhoneRequiredError: 'Please fill in the customer\'s name and phone number',
    nameLettersOnlyError: 'The name can only contain letters and spaces',
    phoneInvalidError: 'The phone can only contain numbers and the + symbol',
    invalidEmailError: 'Please enter a valid email',
    orderUpdateSuccess: 'The order has been successfully updated.',
    orderCreatedTitle: 'Order Created',
    orderCreateSuccess: 'The order has been successfully created.',
    orderDeletedTitle: 'Order Deleted',
    orderDeleteSuccess: 'The order has been successfully deleted.',
    customerLabel: 'Customer',
    addressLabel: 'Address',
    dateLabel: 'Date',
    subtotalLabel: 'Subtotal',

    
    // Products
    productManagement: 'Menu Management',
    newProduct: 'New Product',
    productName: 'Product Name',
    category: 'Category',
    price: 'Price',
    variations: 'Variations',
    ingredients: 'Ingredients',
    noProductsInCategory: 'No products in this category',
    productImages: 'Product Images',
    variationsAndPrices: 'Variations and Prices',
    addVariation: 'Add Variation',
    addIngredient: 'Add Ingredient',
    preparationTime: 'Preparation Time',
    productStatus: 'Status',
    draft: 'Draft',
    outOfStock: 'Out of Stock',
    archived: 'Archived',
    optional: 'Optional',
    extraCost: 'Extra cost',
    productUpdated: 'Product Updated',
    productCreated: 'Product Created',
    productDeleted: 'Product Deleted',
    productArchived: 'Product Archived',
    
    // Categories
    viewMenu: 'View Menu',
    categoryManagement: 'Category Management',
    newCategory: 'New Category',
    categoryName: 'Category Name',
    noCategoriesCreated: 'No categories created',
    createFirstCategory: 'Create your first category to organize your menu.',
    categoryIcon: 'Icon (Emoji)',
    categoryUpdated: 'Category Updated',
    categoryCreated: 'Category Created',
    categoryDeleted: 'Category Deleted',
    categoryActivated: 'Category Activated',
    categoryDeactivated: 'Category Deactivated',
    order: 'Order',
    totalCategories: 'Total Categories',
    activeCategories: 'Active Categories',
    inactiveCategories: 'Inactive Categories',
    categoriesTip: 'Drag and drop the categories to reorder them',
    categoriesCreated: 'Created',
    categoriesDescription: 'Add a description to help your customers...',
    categoriesNameDes: 'Examples: Pizzas, Drinks, Desserts',
    categoryAppearance: 'Category appearance',
    catIconSec: 'Icon (Emoji)',
    catIconDes: 'Use an emoji to quickly identify',
    catImg: 'Cover image',
    catUpImg: 'Upload image',
    catImgRec: 'Recommended: 600x600px (max. 5MB)',
    catObligatry: '*Required fields',
    catDeleteImg: 'Delete image',
    categoryActivatedDes: 'The category has been activated and now appears in your public menu.',
    categoryDeactivatedDes: 'The category has been deactivated and no longer appears in your public menu.',
    
    // Customers
    deletedSuccessfully: 'Deleted successfully',
    deleteCustomers: 'Delete customers',
    selectedPlural: 'Customers',
    customerPlural: 'Customers',
    customerManagement: 'Customer Management',
    totalCustomers: 'Total Customers',
    vipCustomers: 'VIP Customers',
    averageSpent: 'Average Spent',
    contact: 'Contact',
    ordersCount: 'Orders',
    totalSpent: 'Total Spent',
    orderTypes: 'Order Types',
    segment: 'Segment',
    lastOrder: 'Last Order',
    newCustomer: 'New',
    deleteCustomer: 'Delete customer',
    makeVip: 'Make VIP',
    regular: 'Regular',
    frequent: 'Frequent',
    vip: 'VIP',
    filtersAndSearch: 'Filters and Search',
    customerBase: 'Customer base',
    assignedManually: 'Manually assigned',
    frequentCustomers: 'Frequent',
    averageSpending: 'Average Spending',
    perCustomer: 'Per customer',
    allStatuses: 'All statuses',
    activeLast30Days: 'Active (last 30 days)',
    inactivePlus30Days: 'Inactive (+30 days)',
    allSegments: 'All segments',
    onlyVip: 'VIP Only',
    onlyFrequent: 'Frequent Only (5+)',
    onlyRegular: 'Regular Only (2-4)',
    onlyNew: 'New Only (1)',
    sortByName: 'Sort by Name',
    sortByOrders: 'Sort by Orders',
    sortBySpent: 'Sort by Spent',
    sortByDate: 'Sort by Date',
    changeToDescending: 'Change to descending',
    changeToAscending: 'Change to ascending',
    avg: 'avg',
    segmentVipDescription: 'Manually assigned',
    segmentNewDescription: '1 order',
    segmentRegularDescription: '2-4 orders',
    segmentFrequentDescription: '5+ orders',
    segmentNote: '* A customer can be VIP and have another segment',
    noRegisteredCustomers: 'No registered customers',
    noCustomersFound: 'No customers found',
    customersWillAppear: 'Customers will appear here once they place orders.',
    tryDifferentSearch: 'Try different search terms.',
    fullNameRequired: 'Full Name*',
    phoneRequired: 'Phone*',
    customerName: 'Customer name',
    fullAddress: 'Full address',
    deliveryInstructionsPlaceholder: 'References to find the address...',
    vipCustomer: 'VIP Customer',
    saveChanges: 'Save Changes',
    confirmDeletion: 'Confirm Deletion',
    deleteCustomerConfirm: 'Delete customer',
    actionWillDeletePermanently: 'This action will permanently delete:',
    allCustomerInfo: 'All customer information',
    associatedOrders: 'associated order(s)',
    purchaseHistory: 'Purchase history',
    customerVipStatus: 'Customer VIP status',
    bulkEdit: 'Bulk Edit',
    customersSelected: 'customer(s) selected',
    selectActionToPerform: 'Select the action to perform:',
    markAsVip: 'Mark as VIP',
    addVipStatusToSelected: 'Add VIP status to all selected customers',
    removeVipStatusFromSelected: 'Remove VIP status from all selected customers',
    permanentlyDeleteAllCustomersAndOrders: 'Permanently delete all customers and their orders',
    importCustomersFromCSV: 'Import Customers from CSV',
    csvFileFormat: 'CSV file format:',
    customerFullName: 'Customer full name',
    uniquePhoneNumber: 'Unique phone number',
    emailAddress: 'Email address',
    additionalDirections: 'Additional directions',
    or: 'or',
    downloadExampleTemplate: 'Download example template',
    preview: 'Preview',
    line: 'Line',
    validCustomers: 'valid customer(s)',
    searchCustomersPlaceholder: 'customers by name, phone or email...',
    customersTemplate: 'customers_template',
    averagePerOrder: 'Average per Order',
    isVip: 'Is VIP',
    exampleDeliveryInstruction1: 'Two-story house with blue gate',
    exampleDeliveryInstruction2: 'Apartment 301 white building',
    vipCustomerRemoved: 'VIP Customer Removed',
    vipCustomerAdded: 'VIP Customer Added',
    noLongerVipCustomer: 'is no longer a VIP customer.',
    nowVipCustomer: 'is now a VIP customer.',
    noSelection: 'No Selection',
    selectAtLeastOneCustomer: 'Select at least one customer to edit.',
    vipAssigned: 'VIP Assigned',
    markedAsVipPlural: 'marked as VIP.',
    vipRemoved: 'VIP Removed',
    noLongerVipPlural: 'no longer VIP.',
    customersDeleted: 'Customers Deleted',
    deletedSuccessfullyPlural: 'deleted successfully.',
    confirmDeleteMultiple: 'Are you sure you want to delete',
    warningDeleteAction: 'This action will also delete all their orders and cannot be undone.',
    customerUpdated: 'Customer Updated',
    customerInfoUpdatedSuccessfully: 'Customer information has been updated successfully.',
    customerAndOrdersDeleted: 'Customer "{name}" and all their orders have been deleted.',
    noDataToExport: 'No data to export',
    noCustomersMatchFilters: 'No customers match the current filters.',
    csvExported: 'CSV Exported',
    exportedSuccessfullyPlural: '{count} customer(s) exported successfully.',
    templateDownloaded: 'Template Downloaded',
    useTemplateAsGuide: 'Use this template as a guide to import customers.',
    invalidFile: 'Invalid File',
    pleaseSelectValidCSV: 'Please select a valid CSV file.',
    emptyFile: 'Empty File',
    csvFileIsEmpty: 'The CSV file is empty.',
    readError: 'Read Error',
    couldNotReadFile: 'Could not read the file. Please try again.',
    csvEmptyOrNoData: 'The CSV file is empty or has no data.',
    missingRequiredColumnsMsg: 'Missing required columns: {columns}. Found columns: {found}',
    lineIncorrectColumnsMsg: 'Line {line}: Incorrect number of columns (expected {expected}, got {got}). Values: [{values}]',
    lineNameRequired: 'Line {line}: Name is required',
    lineNameOnlyLetters: 'Line {line}: Name "{name}" can only contain letters and spaces',
    linePhoneRequired: 'Line {line}: Phone is required',
    linePhoneOnlyNumbers: 'Line {line}: Phone "{phone}" can only contain numbers and the + symbol',
    lineEmailInvalidFormat: 'Line {line}: Email "{email}" does not have a valid format',
    lineCustomerAlreadyExists: 'Line {line}: Customer with phone {phone} already exists',
    noData: 'No Data',
    fileContainsNoData: 'The file contains no data to import.',
    validationErrors: 'Validation Errors',
    validationError: 'Validation Error',
    nameRequiredError: 'Name is required',
    nameInvalid: 'Name can only contain letters and spaces',
    phoneRequiredError: 'Phone is required',
    phoneInvalid: 'Phone can only contain numbers and the following characters: + - ( ) space',
    emailInvalid: 'Email format is not valid',
    customerAlreadyExists: 'A customer with this phone already exists',
    errorsFoundMsg: 'Found {count} error(s). Review the file and correct the errors.',
    partialImport: 'Partial Import',
    validRecordsAndErrorsMsg: '{valid} valid record(s) and {errors} error(s) found.',
    dataValidated: 'Data Validated',
    customersReadyToImportMsg: '{count} customer(s) ready to import.',
    importSuccessful: 'Import Successful',
    customersImportedMsg: '{count} customer(s) imported successfully.',
    errorsFoundCount: 'Found {count} error(s):',
    editSelected: 'Edit {count} selected',
    editCustomer: 'Edit customer',
    ordersPlus: '5+ orders',
    new: 'new',
    deliveryInstructions: 'Delivery instructions',
    customerDeleted: 'The customer was deleted',
    importCSV: 'Import CSV',
    exportCSV: 'Export CSV',
    
    // Settings
    generalSettings: 'General Settings',
    regionalSettings: 'Regional Settings',
    language: 'Language',
    currency: 'Currency',
    businessHours: 'Business Hours',
    deliverySettings: 'Delivery Settings',
    tableOrders: 'Table Orders',
    qrCodes: 'QR Codes',
    themeSettings: 'Theme Settings',
    socialMedia: 'Social Media',
    notifications: 'Notifications',
    restaurantInfo: 'Restaurant Information',
    contactInfo: 'Contact Information',
    businessInfo: 'Business Information',
    operationalSettings: 'Operational Settings',
    enabled: 'Enabled',
    disabled: 'Disabled',
    minimumOrder: 'Minimum Order',
    deliveryCost: 'Delivery Cost',
    deliveryZones: 'Delivery Zones',
    numberOfTables: 'Number of Tables',
    enableQRCodes: 'Enable QR Codes',
    printAll: 'Print All',
    downloadAll: 'Download All',
    mesa: 'Table',
    // TABS
    tab_general: 'General',
    tab_hours: 'Hours',
    tab_social: 'Social Media',
    tab_delivery: 'Delivery',
    tab_table_orders: 'Table Orders',
    tab_promo: 'Promotional',
    tab_theme: 'Theme',
    tab_billing: 'Billing',
    tab_support: 'Support',
    // TITLES & LABELS
    settings_title: 'Restaurant Settings',
    save_button: 'Save Changes',
    visual_identity_title: 'Visual Identity',
    logo_subtitle: 'Your restaurant logo',
    no_logo: 'No logo',
    change_logo_button: 'Change Logo',
    upload_logo_button: 'Upload Logo',
    delete_button: 'Delete',
    restaurant_info_title: 'Restaurant Information',
    contact_location_subtitle: 'Contact and location details',
    restaurant_name_label: 'Restaurant Name',
    email_label: 'Email',
    phone_label: 'Phone',
    address_label: 'Address',
    description_label: 'Description',
    regional_settings_title: 'Regional Settings',
    language_currency_subtitle: 'System language and currency',
    language_label: 'Language',
    currency_label: 'Currency',
    public_menu_title: 'Public Menu',
    public_menu_description: 'Share this link with your customers so they can view your menu and place orders',
    your_custom_url_label: 'Your custom URL:',
    copy_button: 'Copy',
    view_menu_button: 'View Menu',
    opening_hours_title: 'Opening Hours',
    opening_hours_subtitle: 'Set the hours when your restaurant is open.',
    day_of_week_header: 'Day of the Week',
    status_header: 'Status',
    opening_time_header: 'Opening Time',
    opening_time_label: 'Open',
    closing_time_label: 'Close',
    social_media_title: 'Social Media',
    social_media_subtitle: 'Connect your social networks to display them in your public menu',
    delivery_rates_title: 'Delivery Rates',
    rate_name_label: 'Rate Name',
    coverage_radius_km_label: 'Coverage Radius (km)',
    shipping_cost_cop_label: 'Shipping Cost (COP)',
    min_order_value_cop_label: 'Minimum Order Value (COP)',
    add_rate_button: 'Add Rate',
    table_orders_settings_title: 'Table Order Settings',
    number_of_tables_label: 'Number of Tables',
    table_qr_codes_title: 'Table QR Codes',
    table_qr_codes_description: 'QR codes allow customers to access the menu directly from their table.',
    table_label: 'Table',
    download_png_button: 'Download PNG',
    print_qr_button: 'Print QR',
    theme_customization_title: 'Theme Customization',
    theme_customization_subtitle: 'Configure the colors, typography, and styles of your public menu',
    color_templates_title: 'Color Templates',
    color_templates_subtitle: 'Select a predefined template or customize your colors manually',
    manual_customization_title: 'Manual Customization',
    primary_color_label: 'Primary Theme Color',
    primary_color_hint: 'Buttons, icons, and links',
    menu_bg_color_label: 'Menu Background Color',
    menu_bg_color_hint: 'Main background of the menu',
    card_bg_color_label: 'Card and Background Color',
    card_bg_color_hint: 'Product cards',
    primary_text_color_label: 'Primary Text Color',
    primary_text_color_hint: 'Titles and main texts',
    secondary_text_color_label: 'Secondary Text Color',
    secondary_text_color_hint: 'Descriptions and subtitles',
    billing_settings_title: 'Billing Settings',
    billing_settings_subtitle: 'Legal and tax information for generating valid order tickets in Colombia',
    commercial_name_label: 'Trade Name *',
    social_reason_label: 'Legal Name *',
    nit_label: 'NIT *',
    tax_regime_label: 'Tax Regime *',
    iva_responsible_label: 'VAT Responsible',
    has_dian_resolution_label: 'Has DIAN Resolution?',
    department_label: 'Department *',
    city_label: 'City *',
    address_billing_label: 'Address *',
    phone_billing_label: 'Phone *',
    email_billing_label: 'Email *',
    dian_resolution_data_title: 'DIAN Resolution Data',
    resolution_number_label: 'Resolution Number *',
    resolution_date_label: 'Resolution Date *',
    numbering_range_label: 'Numbering Range *',
    from_label: 'From',
    to_label: 'To',
    tax_tip_settings_title: 'Tax and Tip Settings',
    suggested_tip_label: 'Applies Suggested Tip?',
    ticket_customization_title: 'Ticket Customization',
    show_logo_on_ticket_label: 'Show logo on ticket?',
    ticket_logo_label: 'Ticket Logo',
    ticket_final_message_label: 'Final Ticket Message',
    promo_settings_title: 'Promotional Settings',
    promo_settings_subtitle: 'Set the promotional image and featured products in your public menu',
    vertical_promo_image_label: 'Vertical Promotional Image',
    vertical_promo_image_hint: 'Upload an image that will appear when clicking the promotions button in the public menu',
    featured_products_title: 'Featured Products',
    featured_products_hint: 'Select up to 5 products to display in the featured carousel',
    technical_support_title: 'Technical Support',
    technical_support_subtitle: 'Create a new support ticket or check the status of existing ones',
    create_new_ticket: 'Create New Support Ticket',
    subject_label: 'Subject *',
    priority_label: 'Priority',
    category_label: 'Category',
    message_label: 'Message *',
    contact_email_label: 'Contact Email',
    contact_phone_label: 'Contact Phone',
    send_ticket_button: 'Send Ticket',
    ticket_sent_title: 'Ticket Sent',
    my_support_tickets_title: 'My Support Tickets',
    id_header: 'ID',
    subject_header: 'Subject',
    date_header: 'Date',
    view_details_button: 'View Details',
    clear_form_button: 'Clear Form',
    ticket_detail_modal_title: 'Ticket Details',
    ticket_info_title: 'Ticket Information',
    ticket_id_label: 'Ticket ID',
    opened_by_label: 'Opened By',
    creation_date_label: 'Creation Date',
    last_update_label: 'Last Update',
    client_message_title: 'Client Message',
    admin_response_title: 'Administrator Response',
    additional_notes_title: 'Additional Notes',
    awaiting_response_title: 'Awaiting Response',
    awaiting_response_text: 'Your ticket is being reviewed by our team. We will contact you soon.',
    close_button: 'Close',
    // STATUS/PRIORITY/CATEGORY
    status_pending: 'Pending',
    status_in_progress: 'In Progress',
    status_resolved: 'Resolved',
    status_closed: 'Closed',
    status_unknown: 'Unknown',
    status_closed_simple: 'Closed',
    priority_urgent: 'Urgent',
    priority_high: 'High',
    priority_medium: 'Medium',
    priority_low: 'Low',
    category_general_name: 'General Inquiry',
    category_technical_name: 'Technical Issue',
    category_billing_name: 'Billing',
    category_feature_name: 'Feature Request',
    category_account_name: 'Account & Settings',
    category_other_name: 'Other',
    regime_simple: 'Simple Tax Regime',
    regime_common_iva: 'Common VAT Regime',
    // DAYS
    day_monday: 'Monday',
    day_tuesday: 'Tuesday',
    day_wednesday: 'Wednesday',
    day_thursday: 'Thursday',
    day_friday: 'Friday',
    day_saturday: 'Saturday',
    day_sunday: 'Sunday',
    // SOCIAL MEDIA
    social_facebook: 'Facebook',
    social_instagram: 'Instagram',
    social_twitter: 'Twitter / X',
    social_whatsapp: 'WhatsApp',
    social_youtube: 'YouTube',
    // TEMPLATES
    colorTemplate1: 'Ocean Blue',
    colorTemplate2: 'Dark mode',
    colorTemplate3: 'Natural Garden',
    colorTemplate4: 'Dark Red',
    colorTemplate5: 'Golden Sunset',
    colorTemplate6: 'Dark Ocean',
    colorTemplate7: 'Vibrant Pink',
    colorTemplate8: 'Dark Purple',
    colorTemplate9: 'Dark Green',
    colorTemplate10: 'Vibrant Orange',
    colorTemplate11: 'Soft Purple',
    colorTemplate12: 'Minimalist Dark',
    // Typography
    typography_title: 'Typography',
    primary_font_label: 'Primary font',
    primary_font_hint: 'Font for body and general text',
    secondary_font_label: 'Secondary font',
    secondary_font_hint: 'For titles and highlights',
    font_size_title_label: 'Title size',
    font_size_subtitle_label: 'Subtitle size',
    font_size_normal_label: 'Normal size',
    font_size_example_hint: 'E.g. 32px',
    // MESSAGES/HINTS/ERRORS
    config_saved_title: 'Settings Saved',
    changes_saved_success: 'Changes have been saved successfully.',
    error_title: 'Error',
    save_error_message: 'There was a problem saving the settings.',
    support_send_error_message: 'There was a problem sending the support request.',
    file_too_large_title: 'File Too Large',
    max_size_5mb_error: 'Maximum size is 5MB',
    recommended_specs_title: 'Recommended Specifications',
    accepted_formats_list: 'Accepted formats: JPG, PNG or GIF',
    optimal_dimensions_list: 'Optimal dimensions: 500x500px or higher',
    max_size_list: 'Maximum size: 5MB',
    prefer_transparent_bg_list: 'Transparent background preferred (PNG)',
    restaurant_name_placeholder: 'Ex: El Buen Sabor Restaurant',
    email_placeholder: 'contact@restaurant.com',
    required_for_whatsapp: 'Required to receive orders via WhatsApp',
    address_placeholder: '123 Main St #45-67, Bogotá',
    description_placeholder: 'Describe your restaurant: specialty, atmosphere, story, what makes it unique...',
    max_500_chars_hint: 'Maximum 500 characters',
    language_es_option: '🇪🇸 Spanish',
    language_en_option: '🇺🇸 English',
    language_selector_hint: 'Set the language of the admin interface',
    currency_cop_option: '🇨🇴 Colombian Peso (COP)',
    currency_usd_option: '🇺🇸 US Dollar (USD)',
    currency_eur_option: '🇪🇺 Euro (EUR)',
    currency_mxn_option: '🇲🇽 Mexican Peso (MXN)',
    currency_ars_option: '🇦🇷 Argentine Peso (ARS)',
    currency_clp_option: '🇨🇱 Chilean Peso (CLP)',
    currency_pen_option: '🇵🇪 Peruvian Sol (PEN)',
    currency_selector_hint: 'Currency to display prices in your menu',
    copied_title: 'Copied',
    url_copied_success: 'URL copied to clipboard',
    hours_hint_public_menu: 'The hours are displayed in your public menu',
    hours_hint_open_closed: 'Customers will see whether you are open or closed',
    hours_hint_different_days: 'You can set different hours for each day',
    about_social_media_title: 'About social media:',
    social_hint_footer: 'Links will appear in the footer of your public menu',
    social_hint_full_urls: 'Make sure to use full URLs (https://...)',
    social_hint_whatsapp_format: 'For WhatsApp, use international format (+country code + number)',
    social_hint_icons: 'Icons will display automatically based on the social network',
    rate_value_number_error: 'The rate value must be a number.',
    important_qr_info_title: 'Important information about QR:',
    qr_hint_unique_code: 'Each table will have its own unique QR code',
    qr_hint_scan_to_menu: 'Customers scan the code to access the menu',
    qr_hint_table_auto_detect: 'The table number is detected automatically',
    qr_hint_print_download: 'You can print and download each QR code individually',
    about_customization_title: 'About customization:',
    theme_hint_auto_apply: 'Changes will be applied automatically to your public menu',
    theme_hint_preview: 'You can preview changes by saving the configuration',
    theme_hint_contrast: 'Ensure colors have good contrast for readability',
    theme_hint_font_css: 'Font sizes accept CSS values (px, rem, em)',
    field_required_error: 'This field is required.',
    nit_invalid_error: 'Invalid NIT.',
    select_department_first_hint: 'Select department first',
    ticket_final_message_placeholder: 'Ex: Thanks for your purchase! Come back soon.',
    notes_about_billing_title: 'Notes about Billing:',
    billing_hint_legal_tickets: 'Important for generating legally valid order tickets in Colombia',
    billing_hint_iva_calc: 'If you are VAT responsible, VAT will be calculated and shown on each ticket',
    billing_hint_dian_fe: 'DIAN resolution is required for electronic invoicing',
    billing_hint_tip_optional: 'The tip is optional and will appear as a suggestion to the customer',
    billing_hint_keep_updated: 'Make sure to keep this information updated',
    max_5_products_error: 'Maximum 5 products selected',
    message_placeholder: 'Your detailed message...',
    ticket_sent_success_message: 'Your support request has been sent successfully. We will respond as soon as possible.',
    admin_no_response_yet: 'The administrator has not yet responded to this ticket.',
    select_department: 'Select a Department',
    select_city: 'Select a City',
    view_offers: 'View Offers', // Added missing key from initial state
    actions_header: 'Actions',
    // Placeholders for social media
    facebook_placeholder: 'https://facebook.com/your-restaurant',
    instagram_placeholder: 'https://instagram.com/your-restaurant',
    twitter_placeholder: 'https://twitter.com/your-restaurant',
    whatsapp_placeholder: '+57 300 123 4567',
    youtube_placeholder: 'https://youtube.com/your-channel',
    tiktok_placeholder: 'https://tiktok.com/@your-restaurant',
    website_label: 'Website',
    website_placeholder: 'https://your-restaurant.com',
    // Additional Settings Strings
    config_hours_subtitle: 'Configure your restaurant operating hours',
    preparation_time_title: 'Preparation Time',
    prep_time_label: 'Estimated preparation time',
    prep_time_placeholder: 'E.g.: 30-45 minutes',
    prep_time_hint: 'This is the time that will be shown to customers as an estimate for order preparation',
    opening_hours_section: 'Operating Hours',
    hours_open_label: 'Opening',
    hours_close_label: 'Closing',
    important_info: 'Important information:',
    hours_show_public: 'Hours are displayed on your public menu',
    hours_show_status: 'Customers will see if you are open or closed',
    hours_different_days: 'You can configure different hours for each day',
    about_social_media: 'About social media:',
    social_footer_hint: 'Links will appear in the footer of your public menu',
    social_full_urls: 'Make sure to use full URLs (https://...)',
    social_whatsapp_format: 'For WhatsApp, use international format (+country code + number)',
    social_auto_icons: 'Icons will be displayed automatically based on the social network',
    rate_name_placeholder: 'Standard, Express, Premium...',
    min_order_label: 'Minimum Order ($)',
    max_order_label: 'Maximum Order ($)',
    shipping_cost_label: 'Cost ($)',
    rate_value_error: 'The rate value must be a number.',
    table_settings_title: 'Table Orders Settings',
    qr_codes_title: 'Table QR Codes',
    qr_codes_description: 'QR codes allow customers to access the menu directly from their table.',
    important_qr_info: 'Important information about QR codes:',
    qr_unique_code: 'Each table will have its own unique QR code',
    qr_scan_menu: 'Customers scan the code to access the menu',
    qr_auto_detect: 'The table number is automatically detected',
    qr_print_download: 'You can print and download each QR code individually',
    menu_bg_label: 'Menu Background Color',
    menu_bg_hint: 'Main menu background',
    card_bg_label: 'Card and Background Color',
    card_bg_hint: 'Product cards',
    primary_text_label: 'Primary Text Color',
    primary_text_hint: 'Titles and main texts',
    secondary_text_label: 'Secondary Text Color',
    secondary_text_hint: 'Descriptions and subtitles',
    about_customization: 'About customization:',
    theme_auto_apply: 'Changes will be applied automatically to your public menu',
    theme_preview: 'You can preview changes by saving the configuration',
    theme_contrast: 'Make sure colors have good contrast for readability',
    theme_font_css: 'Font sizes accept CSS values (px, rem, em)',

    // Analytics
    totalRevenue: 'Total Revenue',
    averageTicket: 'Average Ticket',
    monthlyOrders: 'Monthly Orders',
    ordersByType: 'Orders by Type',
    ordersByStatus: 'Orders by Status',
    topProducts: 'Top Products',
    recentActivity: 'Recent Activity',
    filterByDates: 'Filter by Dates',
    from: 'From',
    to: 'To',
    clearFilters: 'Clear Filters',
    showingDataFrom: 'Showing data from',
    until: 'until',
    today: 'today',
    notEnoughData: 'Not enough data to display',
    noSalesYet: 'No sales recorded yet',
    sold: 'sold',
    analyticsToastNoData: "No data to export with current filters.",
    analyticsToastExportSuccess: "Analytics report exported successfully.",
    csvReportTitle: "ANALYTICS REPORT",
    csvRestaurantLabel: "Restaurant",
    csvGenerationDate: "Generation Date",
    csvPeriodLabel: "Analyzed Period",
    csvAllPeriods: "All Periods",
    csvExecutiveSummary: "EXECUTIVE SUMMARY",
    csvTotalOrders: "Total Orders",
    csvCompletedOrders: "Completed Orders",
    csvCancelledOrders: "Cancelled Orders",
    csvCompletionRate: "Completion Rate",
    csvTotalRevenue: "Total Revenue",
    csvAverageTicket: "Average Ticket",
    csvOrderTypeDistribution: "ORDER TYPE DISTRIBUTION",
    csvOrderStatusDistribution: "STATUS DISTRIBUTION",
    orderTypePickup: "Pickup",
    orderTypeDelivery: "Delivery",
    orderTypeTable: "Table Service",
    orderStatusPendingPlural: "Pending Orders",
    orderStatusConfirmedPlural: "Confirmed Orders",
    orderStatusPreparing: "In Preparation",
    orderStatusReadyPlural: "Ready Orders",
    orderStatusDeliveredPlural: "Delivered Orders",
    orderStatusCancelledPlural: "Cancelled Orders",
    csvTopSellingProducts: "TOP SELLING PRODUCTS",
    csvPosition: "Position",
    csvProduct: "Product",
    csvQuantitySold: "Quantity Sold",
    csvRevenue: "Revenue",
    csvSalesByCategory: "SALES BY CATEGORY",
    csvCategory: "Category",
    csvProductCount: "Product Count",
    csvNoCategory: "No Category",
    csvSalesByDay: "SALES BY DAY OF THE WEEK",
    csvDay: "Day",
    csvOrderCount: "Order Count",
    daySunday: "Sunday",
    dayMonday: "Monday",
    dayTuesday: "Tuesday",
    dayWednesday: "Wednesday",
    dayThursday: "Thursday",
    dayFriday: "Friday",
    daySaturday: "Saturday",
    csvOrderDetails: "COMPLETE ORDER DETAILS",
    csvOrderNumber: "Order No.",
    csvDate: "Date",
    csvTime: "Time",
    csvCustomer: "Customer",
    csvPhone: "Phone",
    csvEmail: "Email",
    csvOrderType: "Order Type",
    csvStatus: "Status",
    csvSubtotal: "Subtotal",
    csvDeliveryCost: "Delivery Cost",
    csvTotal: "Total",
    csvPaymentMethod: "Payment Method",
    csvItems: "Items",
    csvSpecialNotes: "Special Notes",
    csvItemsSoldDetails: "DETAILS OF ITEMS SOLD",
    csvVariation: "Variation",
    csvUnitPrice: "Unit Price",
    fileNameRestaurantDefault: "Restaurant",
    fileNamePrefixFrom: "From",
    fileNamePrefixUntil: "Until",
    analyticsPageTitle: "Restaurant Analytics",
    btnExportCSV: "Export CSV",
    btnAdvancedFilters: "Advanced Filters",
    filterDateRange: "Date Range",
    filterDateStart: "Start Date",
    filterDateUntil: "End Date",
    filterCategory: "Filter by Category",
    filterAllCategories: "All Categories",
    filterOrderType: "Filter by Order Type",
    filterAllTypes: "All Types",
    filterStatus: "Filter by Status",
    filterAllStatuses: "All Statuses",
    filterActiveLabel: "Active Filters",
    filterDateStartShort: "Start",
    filterDateToday: "Today",
    btnClearAllFilters: "Clear All Filters",
    filterSummaryShowing: "Showing",
    filterSummaryOrderPlural: "orders",
    filterSummaryOrderSingular: "order",
    filterSummaryMatchingFilters: "matching the filters.",
    filterSummaryInTotal: "in total.",
    analyticsLastUpdated: "Last Updated",
    statTotalOrders: "Total Orders",
    statCompletedSubtitle: "completed",
    statTotalRevenue: "Total Revenue",
    statDeliveredOrdersSubtitle: "from delivered orders",
    statAverageTicket: "Average Ticket",
    statPerOrderSubtitle: "per delivered order",
    statActiveProducts: "Active Products",
    statOf: "of",
    statTotal: "total",
    chartOrdersByType: "Order Type Distribution",
    chartOrdersByMonth: "Orders by Month (Last 6)",
    chartNoData: "No data available for the selected date range.",
    chartOrderStatus: "Order Status Distribution",
    orderStatusPending: "Pending",
    orderStatusConfirmed: "Confirmed",
    orderStatusReady: "Ready",
    orderStatusDelivered: "Delivered",
    orderStatusCancelled: "Cancelled",
    orderStatusUnknown: "Unknown",
    chartTopProductsTitle: 'Top Selling Products',
    chartNoProducts: 'No sales registered yet',
    unitsSold: 'sold',
    recentOrdersTitle: 'Recent Orders',
    customerUnknown: 'N/A',
    
    // Subscription
    subscriptionPlans: 'Subscription Plans',
    choosePlan: 'Choose the plan that best fits your restaurant needs',
    currentPlan: 'Current Plan',
    planActivated: 'Plan Activated!',
    freePlan: 'Free',
    basicPlan: 'Basic',
    proPlan: 'Pro',
    businessPlan: 'Business',
    mostPopular: 'Most Popular',
    unlimited: 'unlimited',
    upTo: 'Up to',
    advancedStats: 'Advanced analytics',
    customDomain: 'Custom domain',
    prioritySupport: 'Priority support',
    advancedCustomization: 'Advanced customization',
    perfectToStart: 'Perfect to start',
    forGrowingRestaurants: 'For growing restaurants',
    forChainsAndFranchises: 'For chains and franchises',
    needHelp: 'Need help choosing?',
    allPlansInclude: 'All plans include full access to our menu and order management system.',
    canChangeAnytime: 'You can change plans at any time.',
    
    // Public Menu
    addToCart: 'Add to Cart',
    cart: 'Cart',
    checkout: 'Checkout',
    yourOrder: 'Your Order',
    cartEmpty: 'Your cart is empty',
    addProductsToStart: 'Add some products to get started',
    proceedToCheckout: 'Proceed to Checkout',
    orderConfirmed: 'Order Confirmed!',
    orderSent: 'Your order has been sent!',
    willContactSoon: 'We have sent your order via WhatsApp to the restaurant. They will contact you soon to confirm.',
    continue: 'Continue',
    finalizeOrder: 'Finalize Order',
    orderTypeSelection: 'Order Type',
    pickupAtRestaurant: 'At the restaurant',
    tableOrder: 'Table order',
    selectTable: 'Select Table',
    fullName: 'Full Name',
    optionalEmail: 'Email (optional)',
    completeAddress: 'Complete Address',
    locationReferences: 'References and location points',
    productActivatedTitle: 'Product activated',
    productActivatedMessage: 'The product has been activated and now appears on your public menu.',
    productCreatedTitle: 'Product created',
    productCreatedMessage: 'The new product has been added to your menu.',
    productUpdatedTitle: 'Product updated',
    productUpdatedMessage: 'The product has been successfully updated.',
    productDeletedTitle: 'Product deleted',
    productDeletedMessage: 'The product has been removed from your menu.',
    productDuplicatedTitle: 'Product duplicated',
    productDuplicatedMessage: 'A copy of "{{name}}" has been created.',
    productArchivedTitle: 'Product archived',
    productArchivedMessage: 'The product has been archived and no longer appears on your public menu.',
    orderUpdatedTitle: 'Order updated',
    orderUpdatedMessage: 'The product position has been updated.',
    productsReorderedMessage: 'Products have been reordered successfully.',
    productLimitTitle: 'Product limit reached',
    productLimitMessage: 'Your current plan allows only {{limit}} products. Upgrade your plan to add more.',
    productsAllowed: 'products allowed',
    upgradePlanToAddMore: 'Upgrade your plan to add more.',
    unknown: 'Unknown',
    unknownCategory: 'Unknown Category',
    copyLabel: 'Copy',
    searchPlaceholder: 'Search products by name, description or SKU...',
    all: 'All',
    tipLabel: 'Tip',
    dragToReorder: 'Drag and drop products to reorder them',
    noProductsFound: 'No products found',
    createFirstProduct: 'Create your first product to get started.',
    clearSearch: 'Clear search',
    noImage: 'No image',
    offer: 'OFFER',
    moveUp: 'Move up',
    moveDown: 'Move down',
    editProduct: 'Edit product',
    duplicateProduct: 'Duplicate product',
    activateProduct: 'Activate product',
    archiveProduct: 'Archive product',
    deleteProduct: 'Delete product',
    deleteProductQuestion: 'Delete product?',
    deleteProductWarning: 'This action will permanently remove the product from your menu. Customers will no longer see or order it.',
    
    
    // Days of week
    monday: 'Monday',
    tuesday: 'Tuesday',
    wednesday: 'Wednesday',
    thursday: 'Thursday',
    friday: 'Friday',
    saturday: 'Saturday',
    sunday: 'Sunday',
    
    // Months
    january: 'January',
    february: 'February',
    march: 'March',
    april: 'April',
    may: 'May',
    june: 'June',
    july: 'July',
    august: 'August',
    september: 'September',
    october: 'October',
    november: 'November',
    december: 'December',
    
    // Time
    open: 'Open',
    closed: 'Closed',
    openNow: 'Open now',
    closedNow: 'Closed',
    hours: 'hours',
    minutes: 'minutes',
    
    // Errors and Messages
    error: 'Error',
    success: 'Success',
    warning: 'Warning',
    info: 'Information',
    required: 'required',
    invalidEmail: 'Invalid email',
    passwordTooShort: 'Password must be at least 6 characters',
    passwordsDontMatch: 'Passwords do not match',
    userNotFound: 'User not found',
    incorrectPassword: 'Incorrect password',
    emailAlreadyRegistered: 'Email is already registered',
    registrationSuccessful: 'Registration Successful!',
    accountPendingApproval: 'Your account is pending approval by our team.',
    unexpectedError: 'Unexpected error',
    confirmDelete: 'Are you sure you want to delete',
    actionCannotBeUndone: 'This action cannot be undone.',
    
    // Limits and Restrictions
    productLimitReached: 'Product Limit Reached',
    categoryLimitReached: 'Category Limit Reached',
    upgradeSubscription: 'Upgrade your subscription',
    addMoreProducts: 'to add more products.',
    addMoreCategories: 'to add more categories.',
    
    // Super Admin
    superAdminPanel: 'Super Admin Panel',
    superAdminDashboard: 'Main Dashboard',
    restaurantsManagement: 'Restaurant Management',
    usersManagement: 'User Management',
    subscriptionsManagement: 'Subscription Management',
    systemStatistics: 'System Statistics',
  },
};

export const useTranslation = (language: Language = 'es') => {
  const t = (key: keyof Translations): string => {
    return translations[language][key] || translations['es'][key] || key;
  };
  
  return { t };
};