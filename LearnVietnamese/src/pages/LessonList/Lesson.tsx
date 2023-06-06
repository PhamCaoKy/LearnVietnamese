import { Button, Card, List, ListItem, ListItemSuffix } from '@material-tailwind/react'
import { useMutation } from '@tanstack/react-query'

import { useLocation, useNavigate } from 'react-router-dom'
import { getFlashCard, getQuiz } from 'src/apis/auth.api'
import CourseCarousel from 'src/components/CourseCarousel'

interface Lesson {
  idLesson: number
  course: string
  nameLesson: string
  created_on: string
}
interface IdLesson {
  idLesson_FK: number
}

export default function Lesson() {
  const navivgate = useNavigate()
  const location = useLocation()
  const Lesson = location.state
  const course = Lesson.map((value: any) => {
    return value.course
  })

  const FlashCardMutation = useMutation({
    mutationFn: (body: IdLesson) => getFlashCard(body)
  })
  const QuizMutaion = useMutation({
    mutationFn: (body: IdLesson) => getQuiz(body)
  })
  const handleFlashCard = (data: IdLesson) => {
    FlashCardMutation.mutate(data, {
      onSuccess: (data2) => {
        navivgate(`/lesson/flashcard/${data.idLesson_FK}`, { state: data2.data.data?.flashcard })
      }
    })
  }

  const handleQuiz = (data: IdLesson) => {
    QuizMutaion.mutate(data, {
      onSuccess: (data2) => {
        navivgate(`/lesson/quiz/${data.idLesson_FK}`, {
          state: { data: data2.data.data?.quiz, course: Lesson[1].course, idFK: data.idLesson_FK }
        })
      }
    })
  }

  return (
    <div className='space-y-2'>
      {/* {course[0] === 'Tiếng Việt' ? (
          <img
            className='w-1/2 rounded-lg inline-block'
            src='https://media.baobinhphuoc.com.vn/upload/video/large/day_tieng_viet_lop_1_tap_1_09101720112021.jpg'
            alt='nature image'
          />
        ) : course[0] === 'Toán' ? (
          <img
            className='ml-4 w-1/2 rounded-lg '
            src='https://play-lh.googleusercontent.com/1a_tQYCKgvJxLzXEDvD0HnF3WhDcUQnaEr6p5Jp-bo1bzX8UvuYYePPtiWgqLKS-m0c=w327-h184-rw'
            alt='nature image'
          />
        ) : (
          <img
            className='ml-4 w-1/2 rounded-lg '
            src='https://media.baobinhphuoc.com.vn/upload/video/large/day_tieng_viet_lop_1_tap_1_09101720112021.jpg'
            alt='nature image'
          />
        )} */}
      <div className='text-center'>
        <CourseCarousel props={course[0]}></CourseCarousel>
      </div>

      <div className='grid grid-cols-2 gap-4 p-4'>
        {Lesson.map((value: Lesson) => {
          return (
            <Card className='w-full ' key={value.idLesson}>
              <List className='p-0'> 
                <ListItem ripple={false} className='p-2'>
                  {value.nameLesson}

                  <ListItemSuffix>
                    <Button
                      color='blue'
                      onClick={() => {
                        handleFlashCard({ idLesson_FK: value.idLesson })
                      }}
                    >
                      Học bài
                    </Button>
                    <Button
                      color='red'
                      className='mt-2'
                      onClick={() => {
                        handleQuiz({ idLesson_FK: value.idLesson })
                      }}
                    >
                      Làm kiểm tra
                    </Button>
                  </ListItemSuffix>
                </ListItem>
              </List>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
