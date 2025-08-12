'use client';

import { useState } from 'react';

import taskApi from '@/task/lib/taskApi';
export default function TasksTest() {
  const [result, setResult] = useState<unknown>(null);
  const sampleTaskId = 'a9b910fb-1760-47b0-8f62-fd014e80bf60';
  const sampleDate = '2025-07-20';

  const handleGetAll = async () => {
    const res = await taskApi.getAllTask();
    setResult(res.data);
  };
  const handleGetOne = async () => {
    const res = await taskApi.getTask({ taskid: sampleTaskId });
    setResult(res.data);
  };
  const handleCreate = async () => {
    const res = await taskApi.createTask({
      content: '테스트 할일 ' + Math.floor(Math.random() * 1000),
      priority: '보통',
      goalId: '테스트 목표',
      taskDate: new Date().toISOString().split('T')[0],
      startTime: '09:00:00',
      endTime: '10:00:00',
      repeatEnabled: false,
      repeatTypes: [],
    });
    setResult(res.data);
  };
  const handleUpdate = async () => {
    const res = await taskApi.updateTask(
      { taskid: sampleTaskId },
      {
        content: '수정된 할일 ' + Math.floor(Math.random() * 1000),
        priority: '중요',
        goalId: '수정 목표',
        taskDate: sampleDate,
        startTime: '11:00:00',
        endTime: '12:00:00',
        repeatEnabled: false,
        repeatTypes: [],
      }
    );
    setResult(res.data);
  };
  const handleDelete = async () => {
    const res = await taskApi.deleteTask({ taskid: sampleTaskId });
    setResult(res.data);
  };
  const handleToggleDone = async () => {
    const res = await taskApi.toggleTaskDone({ taskid: sampleTaskId });
    setResult(res.data);
  };
  const handleGetByDate = async () => {
    const res = await taskApi.getTasksByDate({ date: sampleDate });
    setResult(res.data);
  };

  return (
    <div style={{ padding: 32, maxWidth: 600, margin: '0 auto', fontFamily: 'sans-serif' }}>
      <h2 style={{ marginBottom: 24 }}>Task API 빠른 테스트</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 24 }}>
        <button onClick={handleGetAll} style={btnStyle}>
          전체 조회
        </button>
        <button onClick={handleGetOne} style={btnStyle}>
          단건 조회
        </button>
        <button onClick={handleCreate} style={btnStyle}>
          생성
        </button>
        <button onClick={handleUpdate} style={btnStyle}>
          수정
        </button>
        <button onClick={handleDelete} style={btnStyle}>
          삭제
        </button>
        <button onClick={handleToggleDone} style={btnStyle}>
          완료 토글
        </button>
        <button onClick={handleGetByDate} style={btnStyle}>
          날짜별 조회
        </button>
      </div>
      <div>
        <h4 style={{ margin: '16px 0 8px' }}>API 결과</h4>
        <pre style={{ background: '#222', color: '#fff', padding: 16, maxHeight: 400, overflow: 'auto', borderRadius: 6, fontSize: 14 }}>
          {result ? JSON.stringify(result, null, 2) : '결과 없음'}
        </pre>
      </div>
    </div>
  );
}

const btnStyle = {
  background: '#1976d2',
  color: '#fff',
  border: 0,
  padding: '10px 18px',
  borderRadius: 5,
  fontWeight: 600,
  fontSize: 15,
  cursor: 'pointer',
};
