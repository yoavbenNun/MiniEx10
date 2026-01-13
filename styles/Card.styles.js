import { StyleSheet } from 'react-native';
import { COLORS, SPACING, FONTS } from './Theme';

export const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#FFF5E1',
    marginBottom: SPACING.lg,
    borderRadius: 30,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: SPACING.sm,
    gap: SPACING.md,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: SPACING.sm,
    backgroundColor: COLORS.border,
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
  },
  meta: {
    fontSize: FONTS.small,
    fontWeight: FONTS.semiBold,
    color: COLORS.secondary,
    letterSpacing: 1,
    marginBottom: SPACING.xs,
  },
  title: {
    fontSize: FONTS.standard,
    color: COLORS.primary,
    lineHeight: FONTS.lineHeight,
    fontWeight: FONTS.semiBold,
  },
  readMoreText: {
     fontSize: 12,
     color: COLORS.secondary
  }
});