import { ThemeConfig } from './theme.tokens';

export const QUANTUM: ThemeConfig = {
  name: 'QUANTUM',
  variables: {
    '--bg': '#F8F8F8',
    '--bg-muted': '#EFEFEF',

    '--text': '#222',
    '--text-muted': '#666666',
    '--text-inverse': '#FFFFFF',

    '--primary': '#6366F1',
    '--primary-light': '#A5A6FF',
    '--primary-dark': '#4B50DA',

    '--accent': '#A78BFA',
    '--accent-light': '#D4C7FF',
    '--accent-dark': '#8C76E8',

    '--surface': '#FFFFFF',
    '--surface-alt': '#FDFDFD',
    '--surface-hover': '#F3F3FF',

    '--border': '#E0E0E0',
    '--border-strong': '#CFCFCF',

    '--success': '#22C55E',
    '--warning': '#EAB308',
    '--error': '#EF4444',
    '--info': '#3B82F6',

    '--shadow': 'rgba(0,0,0,0.08)',
    '--overlay': 'rgba(0,0,0,0.35)',

    '--secondary-bg': '#FFFFFF',

    '--sidebar-left-search-bg': '#E8E8E8',
    '--sidebar-left-search-input-text': '#3A3A3A',
    '--sidebar-left-sidebar-option-text': '#3A3A3A',

    '--history-title-text': '#939393',
    '--history-item-text': '#3A3A3A',
    '--history-item-hover-bg': '#E8E8E8',

    '--ch-input-bg': 'var(--secondary-bg)',
    '--ch-input-border': '#CBCBCB',
    '--ch-input-text': '#3A3A3A',
    '--ch-input-plus-icon-bg': '#E8E8E8',
    '--ch-input-plus-icon-text': '#595959',
    '--ch-input-send-icon-bg': '#4468FD',

    '--ch-user-text-bubble-bg': '#4468FD',
    '--ch-bot-text-meta': '#3A3A3A',
    '--ch-bot-text': '#3A3A3A',
    '--ch-user-text': 'var(--text-inverse)',
    '--ch-more-options-bg': '#E8E8E8',

    '--ch-greeting-text': '#3A3A3A',
    '--ch-greeting-sub-text': '#848484',

    '--greeting-logo-path-1': '#303030',
    '--greeting-logo-path-2': '#303030',
    '--greeting-logo-path-3': '#4468FD',
    '--greeting-logo-path-4': '#303030',

    '--menu-item-text': '#353535',
    '--menu-item-text-hover': '#fff',
    '--menu-border': '#CBCBCB',

    '--settings-title-text': '#3A3A3A',
    '--settings-select-label-text': '#3A3A3A',
    '--settings-select-option-text': '#3A3A3A',
    '--settings-footer-text': '#3A3A3A',
    '--settings-select-border': '#3A3A3A',
    '--settings-border': '#CBCBCB',
  },
};

export const GRAPHITE: ThemeConfig = {
  name: 'GRAPHITE',
  variables: {
    '--bg': '#4C4C4C',
    '--bg-muted': '#3A3A3A',

    '--text': '#F8F8F8',
    '--text-muted': '#CFCFCF',
    '--text-inverse': '#111111',
    '--text-white': '#fff',

    '--primary': '#222',
    '--primary-light': '#555555',
    '--primary-dark': '#111111',

    '--accent': '#6366F1',
    '--accent-light': '#A5A6FF',
    '--accent-dark': '#4B4CE3',

    '--surface': '#333',
    '--surface-alt': '#2A2A2A',
    '--surface-hover': '#3F3F3F',

    '--border': '#5A5A5A',
    '--border-strong': '#777777',

    '--success': '#4CAF50',
    '--warning': '#EAB308',
    '--error': '#EF4444',
    '--info': '#3B82F6',

    '--shadow': 'rgba(0,0,0,0.16)',
    '--overlay': 'rgba(0,0,0,0.45)',

    '--secondary-bg': '#353535',

    '--sidebar-left-search-bg': '#4C4C4C',
    '--sidebar-left-search-input-text': '#FFFFFF',
    '--sidebar-left-sidebar-option-text': '#FFFFFF',

    '--history-title-text': '#939393',
    '--history-item-text': '#fff',
    '--history-item-hover-bg': '#4C4C4C',

    '--ch-input-bg': 'var(--secondary-bg)',
    '--ch-input-border': 'var(--secondary-bg)',
    '--ch-input-text': 'var(--text-white)',
    '--ch-input-plus-icon-bg': 'var(--bg)',
    '--ch-input-plus-icon-text': '#AEAEAE',
    '--ch-input-send-icon-bg': 'var(--accent)',

    '--ch-user-text-bubble-bg': 'var(--accent)',
    '--ch-bot-text-meta': '#C2C2C2',
    '--ch-bot-text': 'var(--text-white)',
    '--ch-user-text': 'var(--text-white)',
    '--ch-more-options-bg': '#353535',

    '--ch-greeting-text': 'var(--text-white)',
    '--ch-greeting-sub-text': '#B2B0B0',

    '--greeting-logo-path-1': '#fff',
    '--greeting-logo-path-2': '#4468FD',
    '--greeting-logo-path-3': '#fff',
    '--greeting-logo-path-4': '#fff',

    '--menu-item-text': '#fff',
    '--menu-item-text-hover': '#fff',
    '--menu-border': '#5B5B5B',

    '--settings-title-text': '#fff',
    '--settings-select-label-text': '#fff',
    '--settings-select-option-text': '#fff',
    '--settings-footer-text': '#fff',

    '--settings-select-border': '#fff',
    '--settings-border': '#8A8A8A',
  },
};

export const EXOSTEEL: ThemeConfig = {
  name: 'EXOSTEEL',
  variables: {
    '--bg': '#283248',
    '--text': '#F8F8F8',
    '--text-white': '#fff',
    '--primary': '#009760',
    '--accent': '#677083',
    '--surface': '#222',
    '--shadow': 'rgba(0,0,0,0.12)',

    '--secondary-bg': '#677083',

    '--sidebar-left-search-bg': '#283248',
    '--sidebar-left-search-input-text': '#FFFFFF',
    '--sidebar-left-sidebar-option-text': '#FFFFFF',

    '--history-title-text': '#283248',
    '--history-item-text': '#fff',
    '--history-item-hover-bg': '#283248',

    '--ch-input-bg': 'var(--bg)',
    '--ch-input-border': 'var(--secondary-bg)',
    '--ch-input-text': 'var(--text-white)',
    '--ch-input-plus-icon-bg': 'var(--secondary-bg)',
    '--ch-input-plus-icon-text': 'var(--text-white)',
    '--ch-input-send-icon-bg': 'var(--accent)',

    '--ch-user-text-bubble-bg': 'var(--secondary-bg)',
    '--ch-bot-text-meta': 'var(--text-white)',
    '--ch-bot-text': 'var(--text-white)',
    '--ch-user-text': 'var(--text-white)',
    '--ch-more-options-bg': '#677083',

    '--ch-greeting-text': 'var(--text-white)',
    '--ch-greeting-sub-text': '#A8A8A8',

    '--greeting-logo-path-1': '#fff',
    '--greeting-logo-path-2': '#4468FD',
    '--greeting-logo-path-3': '#fff',
    '--greeting-logo-path-4': '#fff',

    '--menu-item-text': '#fff',
    '--menu-item-text-hover': '#fff',
    '--menu-border': '#9F9F9F',

    '--settings-title-text': '#fff',
    '--settings-select-label-text': '#fff',
    '--settings-select-option-text': '#fff',
    '--settings-footer-text': '#fff',

    '--settings-select-border': '#fff',
    '--settings-border': '#8A8A8A',
  },
};

export const JADEUS: ThemeConfig = {
  name: 'JADEUS',
  variables: {
    '--bg': '#009760',
    '--text': '#fff',
    '--text-white': '#fff',
    '--primary': '#283248',
    '--accent': '#009760',
    '--surface': '#222',
    '--shadow': 'rgba(0,0,0,0.10)',

    '--secondary-bg': '#004C30',

    '--sidebar-left-search-bg': '#009760',
    '--sidebar-left-search-input-text': '#FFFFFF',
    '--sidebar-left-sidebar-option-text': '#FFFFFF',

    '--history-title-text': '#009760',
    '--history-item-text': '#fff',
    '--history-item-hover-bg': '#009760',

    '--ch-input-bg': 'var(--secondary-bg)',
    '--ch-input-border': 'var(--secondary-bg)',
    '--ch-input-text': 'var(--text-white)',
    '--ch-input-plus-icon-bg': 'var(--bg)',
    '--ch-input-plus-icon-text': 'var(--text-white)',
    '--ch-input-send-icon-bg': 'var(--bg)',

    '--ch-user-text-bubble-bg': 'var(--secondary-bg)',
    '--ch-bot-text-meta': 'var(--text-white)',
    '--ch-bot-text': 'var(--text-white)',
    '--ch-user-text': 'var(--text-white)',
    '--ch-more-options-bg': '#004C30',

    '--ch-greeting-text': 'var(--text-white)',
    '--ch-greeting-sub-text': 'var(--text-white)',

    '--greeting-logo-path-1': '#fff',
    '--greeting-logo-path-2': '#fff',
    '--greeting-logo-path-3': '#fff',
    '--greeting-logo-path-4': '#fff',

    '--menu-item-text': '#fff',
    '--menu-item-text-hover': '#fff',
    '--menu-border': '#60CBA4',

    '--settings-title-text': '#fff',
    '--settings-select-label-text': '#fff',
    '--settings-select-option-text': '#fff',
    '--settings-footer-text': '#fff',

    '--settings-select-border': '#fff',
    '--settings-border': '#8A8A8A',
  },
};

export const ONYX: ThemeConfig = {
  name: 'ONYX',
  variables: {
    '--bg': '#1D1D1D',
    '--text': '#F8F8F8',
    '--primary': '#6366f1',
    '--accent': '#4468FD',
    '--surface': '#222',
    '--shadow': 'rgba(0,0,0,0.18)',

    '--secondary-bg': '#353535',

    '--sidebar-left-search-bg': '#1D1D1D',
    '--sidebar-left-search-input-text': '#FFFFFF',
    '--sidebar-left-sidebar-option-text': '#FFFFFF',

    '--history-title-text': '#939393',
    '--history-item-text': '#fff',
    '--history-item-hover-bg': '#1D1D1D',

    '--ch-input-bg': 'var(--secondary-bg)',
    '--ch-input-border': 'var(--secondary-bg)',
    '--ch-input-text': 'var(--text-white)',
    '--ch-input-plus-icon-bg': 'var(--bg)',
    '--ch-input-plus-icon-text': 'var(--text-white)',
    '--ch-input-send-icon-bg': 'var(--accent)',

    '--ch-user-text-bubble-bg': 'var(--accent)',
    '--ch-bot-text-meta': '#C2C2C2',
    '--ch-bot-text': 'var(--text-white)',
    '--ch-user-text': 'var(--text-white)',
    '--ch-more-options-bg': '#353535',

    '--ch-greeting-text': 'var(--text-white)',
    '--ch-greeting-sub-text': '#848484',

    '--greeting-logo-path-1': '#fff',
    '--greeting-logo-path-2': '#4468FD',
    '--greeting-logo-path-3': '#fff',
    '--greeting-logo-path-4': '#fff',

    '--menu-item-text': '#fff',
    '--menu-item-text-hover': '#fff',
    '--menu-border': '#5B5B5B',

    '--settings-title-text': '#fff',
    '--settings-select-label-text': '#fff',
    '--settings-select-option-text': '#fff',
    '--settings-footer-text': '#fff',

    '--settings-select-border': '#fff',
    '--settings-border': '#8A8A8A',
  },
};
