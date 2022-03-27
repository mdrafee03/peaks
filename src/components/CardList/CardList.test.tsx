import { render, screen } from '@testing-library/react';
import Logo from 'src/assets/logo.svg';
import { GuardianData } from 'src/interfaces/Guardian.interface';
import { renderRootProvider } from 'src/utils/RootProviderTest';
import CardList from './CardList';

describe('Cardlist test', () => {
  const articles: GuardianData[] = [
    {
      id: '1',
      webPublicationDate: 'date',
      webTitle: 'testTitle',
    },
    {
      id: '2',
      webPublicationDate: 'date',
      webTitle: 'testTitle',
    },
  ];
  beforeEach(() => renderRootProvider(<CardList articles={articles} />));

  it('render peaks logo if not imgUrl provided', () => {
    expect(screen.getAllByRole('img')[0]).toHaveAttribute('src', Logo);
  });

  it('render number of articles correctly', () => {
    expect(screen.getAllByRole('link')).toHaveLength(2);
  });
});
