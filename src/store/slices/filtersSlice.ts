import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

interface FiltersState {
  caseStudy: {
    country: string
    type: string
    region: string
  }
  blog: {
    search: string
    category: string
  }
  faq: {
    search: string
    category: string
  }
}

const initialState: FiltersState = {
  caseStudy: {
    country: 'all',
    type: 'all',
    region: 'all',
  },
  blog: {
    search: '',
    category: 'all',
  },
  faq: {
    search: '',
    category: 'all',
  },
}

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCaseStudyFilter: (state, action: PayloadAction<Partial<FiltersState['caseStudy']>>) => {
      state.caseStudy = { ...state.caseStudy, ...action.payload }
    },
    setBlogFilter: (state, action: PayloadAction<Partial<FiltersState['blog']>>) => {
      state.blog = { ...state.blog, ...action.payload }
    },
    setFaqFilter: (state, action: PayloadAction<Partial<FiltersState['faq']>>) => {
      state.faq = { ...state.faq, ...action.payload }
    },
    resetFilters: () => initialState,
  },
})

export const { setCaseStudyFilter, setBlogFilter, setFaqFilter, resetFilters } = filtersSlice.actions
export default filtersSlice.reducer
