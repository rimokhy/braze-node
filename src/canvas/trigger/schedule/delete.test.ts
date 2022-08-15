import { post } from '../../../common/request'
import { _delete } from '.'
import type { CanvasTriggerScheduleDeleteObject } from './types'

jest.mock('../../../common/request')
const mockedPost = jest.mocked(post)

beforeEach(() => {
  jest.clearAllMocks()
})

describe('/canvas/trigger/schedule/delete', () => {
  const apiUrl = 'https://rest.iad-01.braze.com'
  const apiKey = 'apiKey'
  const body: CanvasTriggerScheduleDeleteObject = {
    canvas_id: 'canvas_identifier',
    schedule_id: 'schedule_identifier',
  }
  const data = {}

  it('calls request with url and body', async () => {
    mockedPost.mockResolvedValueOnce(data)
    expect(await _delete(apiUrl, apiKey, body)).toBe(data)
    expect(mockedPost).toBeCalledWith(`${apiUrl}/canvas/trigger/schedule/delete`, body, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
    })
    expect(mockedPost).toBeCalledTimes(1)
  })
})
