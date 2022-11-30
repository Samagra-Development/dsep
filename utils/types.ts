export type DSEP_SEARCH_FILTER = {
  provider?: string;
  course_mode?: string;
  query?: string; // filtering text
  course_duration?: string;
  course_credits?: boolean; // does it have some credits (some NPTEL courses offer college credits)
  course_category?: string; // category filter (engg, biology, economics, something else)
  course_level?: string; // UG, PG etc.
  rating?: string;
  max_price?: string;
  min_price?: string;
  competency?: string; // competency level (some number based on the NCERT or other providers standard)
  exams?: string; // what exams does it help preparing for?
  subjects?: string; // what subjects does the course correspond to
  isCertified?: boolean; // Will there be a certificate of completion
  course_type?: string; // TEXT BASED VIDEO BASED HYBRID ETC
  seller_name?: string;
  seller_email?: string;
};
