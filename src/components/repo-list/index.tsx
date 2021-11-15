import { useTheme } from 'styled-components'
import { Repo } from '../../types'
import { Icon } from '../icon'
import { Col, Row } from '../layout'
import {
  CounterContainer,
  ItemContainer,
  Container,
  Title,
  ItemsContainer,
  TitleStrong,
  LangCircle,
  Description,
} from './styled'

type RepoListProps = {
  totalCount: number
  repos: Repo[]
}

function RepoListComponent({ totalCount, repos }: RepoListProps) {
  const { colors } = useTheme()

  return (
    <Container>
      <CounterContainer>
        <small>
          Showing {repos.length} of {totalCount}
        </small>
      </CounterContainer>

      <ItemsContainer>
        {repos.map(
          ({
            id,
            nameWithOwner,
            url,
            description,
            forkCount,
            stargazerCount,
            primaryLanguage,
          }) => (
            <ItemContainer key={id}>
              <Row xBetween>
                <Col>
                  <Title
                    href={url}
                    target="_blank"
                    style={{ marginBottom: '8px' }}
                  >
                    {nameWithOwner}
                  </Title>

                  <Description
                    dangerouslySetInnerHTML={{ __html: description || '' }}
                  ></Description>

                  {primaryLanguage && (
                    <Row yCenter style={{ marginTop: '8px' }}>
                      <LangCircle color={primaryLanguage.color} />
                      &nbsp;
                      <small>{primaryLanguage.name}</small>
                    </Row>
                  )}
                </Col>

                <Col>
                  <Row yCenter xEnd>
                    <small>{stargazerCount}</small>
                    &nbsp;
                    <Icon name="star" color={colors.yellow} />
                  </Row>

                  <Row yCenter xEnd>
                    <small>{forkCount}</small>
                    &nbsp;
                    <Icon name="fork" />
                  </Row>
                </Col>
              </Row>
            </ItemContainer>
          )
        )}
      </ItemsContainer>
    </Container>
  )
}

export const RepoList = RepoListComponent
