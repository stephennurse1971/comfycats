<?php

namespace App\Repository;

use App\Entity\Log;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Log|null find($id, $lockMode = null, $lockVersion = null)
 * @method Log|null findOneBy(array $criteria, array $orderBy = null)
 * @method Log[]    findAll()
 * @method Log[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class LogRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Log::class);
    }

    /**
     * @return Log[] Returns an array of Log objects
     */

    public function findNotSteve()
    {
        return $this->createQueryBuilder('l')
            ->andWhere('l.additionalInfo not like :val')
            ->setParameter('val', 'Stephen Nurse%')
            ->orderBy('l.id', 'ASC')
            ->getQuery()
            ->getResult();
    }
}


