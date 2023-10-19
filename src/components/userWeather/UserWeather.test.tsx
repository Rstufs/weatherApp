import '@testing-library/jest-dom'
import { renderHook } from '@testing-library/react'
import { describe, test } from 'vitest'
import useNavigatorLocation from '../../hooks/useNavigatorLocation'


describe( 'UserWeather', () => {

  test('Custom Hook useLocation should return an object location with coords', () => {
    const mockLocation = {
      latitude: 36.712500,
      longitude: -4.407000
    }
    const mockGeolocation = {
      getCurrentPosition: vi.fn().mockImplementation((success) =>
        Promise.resolve(
          success({
            coords: {
              latitude: 36.712500,
              longitude: -4.407000
            }
          })
        )
      )
    }
    // @ts-ignore
    navigator.geolocation = mockGeolocation
    const { result } = renderHook(() => useNavigatorLocation())

    expect(result.current).toEqual(mockLocation)
  })
  
})